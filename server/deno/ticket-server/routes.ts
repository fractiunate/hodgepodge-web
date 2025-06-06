import { Router } from "https://deno.land/x/oak@v12.6.0/mod.ts";
import { TicketCreateSchema, TicketSchema } from "./schemas.ts";
import {
  EventHubProducerClient,
  EventHubConsumerClient,
} from "@azure/event-hubs";
import "jsr:@std/dotenv/load";
import { sendTicketQueue } from "./sender.ts";
import { QueueClient } from "@azure/storage-queue";


const router = new Router({ prefix: "/api/v1/ticket" });
const tickets = new Map<string, any>();

const connection_string = Deno.env.get("EVENT_HUB_CONNECTION_STRING") || "";

// const producer_client = new EventHubProducerClient(
//   connection_string,
//   "approved-tickets"
// );

const queue_client = new QueueClient(
  Deno.env.get("AZURE_QUEUE_CONNECTION_STRING")!,
  "approved"
);


// const consumerClient = new EventHubConsumerClient(
//   "my-consumer-group",
//   "my-connection-string",
//   "my-event-hub",
// );

router
  .post("/create", async (ctx) => {
    const body = await ctx.request.body({ type: "json" }).value;

    const result = TicketCreateSchema.safeParse(body);
    if (!result.success) {
      ctx.response.status = 400;
      ctx.response.body = JSON.stringify({ error: result.error });
      return;
    }

    const id = crypto.randomUUID();
    tickets.set(id, { id, status: "pending", ...body });
    ctx.response.status = 201;
    ctx.response.body = { id };
  })
  .get("/list", (ctx) => {
    ctx.response.body = Array.from(tickets.values());
  })
  .get("/:id", (ctx) => {
    const ticket = tickets.get(ctx.params.id!);
    if (!ticket) {
      ctx.response.status = 404;
      ctx.response.body = { error: "Ticket not found" };
      return;
    }
    ctx.response.body = ticket;
  })
  .post("/:id/approve", async (ctx) => {
    const ticket = tickets.get(ctx.params.id!);
    if (!ticket) {
      ctx.response.status = 404;
      ctx.response.body = { error: "Ticket not found" };
      return;
    }
    if (ticket.status === "approved") {
      ctx.response.status = 409;
      ctx.response.body = { error: "Already approved" };
      return;
    }
    ticket.status = "approved";
    tickets.set(ticket.id, ticket);
  
    try {
      await sendTicketQueue(queue_client, ticket);
      
      ctx.response.status = 200;
      ctx.response.body = ticket;
    } catch (err) {
      ctx.response.status = 500;
      ctx.response.body = { error: "Failed to send to Event Hub." };
    }
  })
  .post("/:id/revoke", (ctx) => {
    const ticket = tickets.get(ctx.params.id!);
    if (!ticket) {
      ctx.response.status = 404;
      ctx.response.body = { error: "Ticket not found" };
      return;
    }
    if (ticket.status !== "approved") {
      ctx.response.status = 403;
      ctx.response.body = { error: "Ticket not approved" };
      return;
    }
    if (ticket.status === "revoked") {
      ctx.response.status = 409;
      ctx.response.body = { error: "Ticket already revoked" };
      return;
    }
    ticket.status = "revoked";
    tickets.set(ticket.id, ticket);
    ctx.response.status = 200;
    ctx.response.body = ticket;
  });

export const routes = router;
