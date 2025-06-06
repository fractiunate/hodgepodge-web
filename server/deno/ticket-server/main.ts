import { Application, Router } from "https://deno.land/x/oak@v12.6.0/mod.ts";
import { oakCors } from "https://deno.land/x/cors@v1.2.2/mod.ts";
import { routes } from "./routes.ts";
import { openApiSpec } from "./openapi.ts";
import { EmailClient } from "@azure/communication-email";
import { QueueClient } from "@azure/storage-queue";
import { EmailSender } from "./services/emailSender.ts";
import { QueueProcessor } from "./services/queueProcessor.ts";



const queueClient = new QueueClient(
  Deno.env.get("AZURE_QUEUE_CONNECTION_STRING")!,
  "approved"
);

const emailClient = new EmailClient(
  Deno.env.get("AZURE_COMMUNICATION_CONNECTION_STRING")!
);

const senderAddress = "no-reply@fractiunate.me";

const emailSender = new EmailSender(emailClient, senderAddress);
const queueProcessor = new QueueProcessor(queueClient, emailSender);

queueProcessor.start();


const app = new Application();
const router = new Router();

router
  .get("/openapi.json", (ctx) => {
    ctx.response.body = openApiSpec;
  })
  .use(routes.routes(), routes.allowedMethods());

app.use(oakCors()); // Enable CORS
app.use(router.routes());
app.use(router.allowedMethods());

console.log("Server running on http://localhost:8000");
await app.listen({ port: 8000 });
