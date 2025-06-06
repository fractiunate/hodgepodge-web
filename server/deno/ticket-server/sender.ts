import { EventHubProducerClient } from "@azure/event-hubs";
import { retry } from "./retry.ts";
import { TicketSchemaType } from "./schemas.ts";
import { QueueClient } from "@azure/storage-queue";

export async function sendTicketEventhub(producerClient: EventHubProducerClient, ticket: TicketSchemaType) {
  await retry(async () => {
    const batch = await producerClient.createBatch();
    const added = batch.tryAdd({ body: JSON.stringify(ticket) });

    if (!added) {
      throw new Error("Failed to add message to batch");
    }

    await producerClient.sendBatch(batch);
    console.log(`✅ Ticket ${ticket.id} sent.`);
  });
}

export async function sendTicketQueue(queue_client: QueueClient , ticket: TicketSchemaType) {
  await retry(async () => {
    await queue_client.sendMessage(btoa(JSON.stringify(ticket)));
    console.log(`✅ Ticket ${ticket.id} in approval queue.`);
  });
}
