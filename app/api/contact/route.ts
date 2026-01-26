import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL,
      subject: `New message from ${data.firstName} ${data.lastName}`,
      text: `
Name: ${data.firstName} ${data.lastName}
Email: ${data.email}
Phone: ${data.phone || "N/A"}
Message: ${data.message}
      `,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error: unknown) {
    // Type-safe error handling
    let message = "Unknown error";
    if (error instanceof Error) {
      message = error.message;
    }
    console.error("Email sending error:", message);
    return new Response(JSON.stringify({ success: false, error: message }), { status: 500 });
  }
}
