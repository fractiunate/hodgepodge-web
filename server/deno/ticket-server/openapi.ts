import { createDocument } from "zod-openapi";
import { TicketCreateSchema, TicketSchema } from "./schemas.ts";
import { z } from "zod";

export const openApiSpec = createDocument({
  openapi: "3.1.0",
  info: {
    title: "My API",
    version: "1.0.0",
  },
  paths: {
    "/api/v1/ticket/create": {
      post: {
        summary: "Create a ticket",
        requestBody: {
          required: true,
          content: {
            "application/json": { schema: TicketCreateSchema },
          },
        },
        responses: {
          201: {
            description: "Ticket created",
            content: {
              "application/json": { schema: TicketSchema },
            },
          },
        },
      },
    },
    "/api/v1/ticket/list": {
      get: {
        summary: "List all tickets",
        responses: {
          200: {
            description: "List of tickets",
            content: {
              "application/json": { schema: TicketSchema.array() },
            },
          },
        },
      },
    },
    "/api/v1/ticket/{id}": {
      get: {
        summary: "Get a ticket by ID",
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            schema: { type: "string" },
          },
        ],
        responses: {
          200: {
            description: "Ticket details",
            content: {
              "application/json": {
                schema: TicketSchema,
              },
            },
          },
          404: {
            description: "Ticket not found",
          },
        },
      },
    },
  },
});
