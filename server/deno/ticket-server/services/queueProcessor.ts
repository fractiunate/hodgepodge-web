import { QueueClient } from "@azure/storage-queue";
import { EmailSender } from "./emailSender.ts";
import { TicketSchemaType } from "../schemas.ts";
import { pLimit } from "https://deno.land/x/p_limit@v1.0.0/mod.ts";

export class QueueProcessor {
  constructor(
    private queue: QueueClient,
    private emailSender: EmailSender,
    private pollInterval = 5000
  ) {}

  async start() {
    while (true) {
      const limit = pLimit(5);
      const messages = await this.queue.receiveMessages({
        numberOfMessages: 10,
        visibilityTimeout: 120,
      });

      await Promise.all(
        messages.receivedMessageItems.map((msg) =>
          limit(async () => {
            let ticket: TicketSchemaType;
            try {
              ticket = JSON.parse(atob(msg.messageText));
            } catch (err) {
              console.error(
                "❌ Failed to parse message:",
                msg.messageText,
                err
              );
              return;
            }

            try {
              await this.emailSender.sendTicketEmail(ticket);
              await this.queue.deleteMessage(msg.messageId, msg.popReceipt);
              console.log(`✅ Processed and deleted message ${msg.messageId}`);
            } catch (err) {
              console.error(
                "❌ Failed to process message:",
                ticket?.id,
                err.message
              );
            }
          })
        )
      );

      await new Promise((res) => setTimeout(res, this.pollInterval));
    }
  }
}
