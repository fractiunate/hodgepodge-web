import { Router } from "https://deno.land/x/oak@v12.6.0/mod.ts";
import { TicketCreateSchema } from "./schemas.ts";
import "jsr:@std/dotenv/load";
import { sendTicketQueue } from "./sender.ts";
import { QueueClient } from "@azure/storage-queue";

export function createRoutes(
  queueClient: QueueClient,
  prefix: string = "/api/v1/ticket"
): Router {
  const router = new Router({ prefix });

  const tickets = new Map<string, any>();
;

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
        await sendTicketQueue(queueClient, ticket);

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
  return router;
}
