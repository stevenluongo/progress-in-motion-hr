"use server";

import { SESv2Client, SendEmailCommand } from "@aws-sdk/client-sesv2";

export async function sendEmail(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const company = formData.get("company") as string;
  const phone = formData.get("phone") as string;
  const message = formData.get("message") as string;

  const ses = new SESv2Client({
    region: process.env.AWS_REGION,
    credentials: {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    },
  });

  const res = await ses.send(
    new SendEmailCommand({
      FromEmailAddress: "marketing@huntersrun.net",
      Destination: { ToAddresses: ["marketing@huntersrun.net"] },
      Content: {
        Simple: {
          Subject: { Data: `30D Condo Inquiry from ${name}` },
          Body: {
            Html: {
              Data: `
              <div>
                <h1>Hello, you have received a new inquiry from ${name}</h1>
                <p>Name: ${name}</p>
                <p>Email: ${email}</p>
                ${company && `<p>Company Name:${company}</p>`}
                <p>Phone Number: ${phone}</p>
                <p>Message: ${message}</p>
                <p>Best regards,</p>
              </div>
            `,
            },
          },
        },
      },
    })
  );
  return JSON.stringify(res);
}
