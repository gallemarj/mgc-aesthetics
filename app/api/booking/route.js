// Booking form API
// By default, this logs submissions to the console.
// To send emails, set up Resend (resend.com) and uncomment the Resend code below.

export async function POST(request) {
  try {
    const data = await request.json();

    console.log("=== NEW BOOKING ===");
    console.log(JSON.stringify(data, null, 2));

    // To send emails via Resend:
    // 1. Sign up at resend.com (free tier)
    // 2. Create an API key, add to .env.local: RESEND_API_KEY=re_xxxx
    // 3. Uncomment below and replace YOUR_EMAIL and mgcaesthetics.com domain
    //
    // import { Resend } from "resend";
    // const resend = new Resend(process.env.RESEND_API_KEY);
    //
    // await resend.emails.send({
    //   from: "MGC Aesthetics <bookings@mgcaesthetics.com>",
    //   to: "youremail@gmail.com",
    //   subject: `New booking: ${data.service} from ${data.name}`,
    //   html: `
    //     <h2>New Booking Request</h2>
    //     <p><strong>Name:</strong> ${data.name}</p>
    //     <p><strong>Phone:</strong> ${data.phone}</p>
    //     <p><strong>Email:</strong> ${data.email}</p>
    //     <p><strong>Service:</strong> ${data.service}</p>
    //     <p><strong>Preferred Date:</strong> ${data.date}</p>
    //     <p><strong>Message:</strong> ${data.message}</p>
    //   `,
    // });

    return Response.json({ success: true });
  } catch (error) {
    console.error("Booking error:", error);
    return Response.json({ error: "Failed to process booking" }, { status: 500 });
  }
}
