// Contact form API
// By default, this logs submissions to the console.
// To send emails, set up Resend (resend.com) and uncomment the Resend code below.

export async function POST(request) {
  try {
    const data = await request.json();

    console.log("=== NEW CONTACT MESSAGE ===");
    console.log(JSON.stringify(data, null, 2));

    // To send emails via Resend, uncomment (see /api/booking/route.js for details):
    // import { Resend } from "resend";
    // const resend = new Resend(process.env.RESEND_API_KEY);
    //
    // await resend.emails.send({ ... });

    return Response.json({ success: true });
  } catch (error) {
    console.error("Contact error:", error);
    return Response.json({ error: "Failed to send message" }, { status: 500 });
  }
}
