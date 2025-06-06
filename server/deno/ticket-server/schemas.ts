import { z } from "zod";

export const TicketCreateSchema = z.object({
  title: z.string(),
  fullname: z.string(),
  email: z.string().email(),
});

export const TicketSchema = TicketCreateSchema.extend({
  id: z.string(),
  status: z.enum(["pending", "approved", "revoked"]),
});


export type TicketSchemaType = z.infer<typeof TicketSchema>;