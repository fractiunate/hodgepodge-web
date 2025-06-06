import { EmailClient, EmailMessage } from "@azure/communication-email";
import {
  PDFDocument,
  StandardFonts,
  rgb,
  PDFFont,
} from "https://cdn.skypack.dev/pdf-lib@^1.11.1?dts";
import QRCode from "qrcode";

export class EmailSender {
  constructor(private client: EmailClient, private fromAddress: string) {}

  async sendTicketEmail(ticket: any) {
    const pdfDoc = await PDFDocument.create();
    // const qrCodeImage = sQRCode.toString(ticket.id);

    const qrCodeImage = (await QRCode.toDataURL(ticket.id)) as string;

    const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
    const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

    const page = pdfDoc.addPage([600, 400]);
    const color = rgb(0.2, 0.2, 0.2);
    page.drawText("Ticket Confirmation", {
      x: 20,
      y: 350,
      size: 30,
      font: fontBold,
    });
    page.drawText(`Ticket ID: ${ticket.id}`, {
      x: 20,
      y: 328,
      size: 16,
      color: color,
      font,
    });
    page.drawText(`Name: ${ticket.fullname}`, {
      x: 20,
      y: 290,
      size: 16,
      color: rgb(0, 0, 0),
      font,
    });

    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    } as Intl.DateTimeFormatOptions;

    page.drawText(
      `Event Date: ${new Date(Date.now()).toLocaleDateString(
        "en-US",
        options
      )}`,
      {
        x: 20,
        y: 270,
        size: 16,
        color: rgb(0, 0, 0),
      }
    );
    const pdfImage = await pdfDoc.embedPng(qrCodeImage);
    page.drawImage(pdfImage, {
      x: 430,
      y: 20,
      width: 150,
      height: 150,
    });

    //    <img src="${await QRCode(ticket.id)}" alt="QR Code for Ticket ${ticket.id}" />`,
    const message: EmailMessage = {
      senderAddress: this.fromAddress,
      attachments: [
        {
          name: `ticket-${ticket.id}.pdf`,
          contentType: "application/pdf",
          contentInBase64: await pdfDoc.saveAsBase64({ dataUri: false }),
        },
      ],
      content: {
        subject: `Ticket Approved: ${ticket.id}`,
        // plainText: `Your ticket with ID ${ticket.id} has been approved.`,
        html: `<h1>Ticket Approved</h1>
               <p>Your ticket with ID <strong>${ticket.id}</strong> has been approved.</p>
               <p>Here is your QR code:</p>
               <p></p>`,
      },

      recipients: {
        to: [
          {
            address: ticket.email,
            displayName: ticket.name || "User",
          },
        ],
      },
    };

    const response = await this.client.beginSend(message);
    await response.pollUntilDone();
    // console.log("📨 Email request ID:", response.);
  }
}
