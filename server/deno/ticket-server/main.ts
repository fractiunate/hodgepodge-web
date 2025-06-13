import { Application, Router } from "https://deno.land/x/oak@v12.6.0/mod.ts";
import { oakCors } from "https://deno.land/x/cors@v1.2.2/mod.ts";
import { createRoutes } from "./routes.ts";
import { openApiSpec } from "./openapi.ts";
import { EmailClient } from "@azure/communication-email";
import { QueueClient } from "@azure/storage-queue";
import { EmailSender } from "./services/emailSender.ts";
import { QueueProcessor } from "./services/queueProcessor.ts";

const app = new Application();

const queueClient = new QueueClient(
  Deno.env.get("AZURE_QUEUE_CONNECTION_STRING")!,
  Deno.env.get("AZURE_QUEUE_APPROVED_NAME") || "approved"
);

const emailClient = new EmailClient(
  Deno.env.get("AZURE_COMMUNICATION_CONNECTION_STRING")!
);

const senderAddress =
  Deno.env.get("AZURE_COMMUNICATION_SENDER_ADDRESS") ||
  "no-reply@fractiunate.me";

const emailSender = new EmailSender(emailClient, senderAddress);
const queueProcessor = new QueueProcessor(queueClient, emailSender);

const router = new Router();
const routes = createRoutes(queueClient);

router
  .get("/openapi.json", (ctx) => {
    ctx.response.body = openApiSpec;
  })
  .use(routes.routes(), routes.allowedMethods());

app.use(oakCors()); // Enable CORS
app.use(router.routes());
app.use(router.allowedMethods());

queueProcessor.start();
console.log("Server running on http://localhost:8000");
await app.listen({ port: 8000 });
