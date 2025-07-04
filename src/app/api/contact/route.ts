import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const data = {
      name: formData.get('name'),
      phone: formData.get('phone'),
      email: formData.get('email'),
      message: formData.get('message'),
      preferredTime: formData.get('preferredTime'),
      consent: formData.get('consent'),
    };

    console.log("📥 Contact form submission:", data);

    // Optionally: Save to DB or send email here

    return NextResponse.json({ success: true, message: "Message received!" });
  } catch (error) {
    console.error("❌ API Error:", error);
    return NextResponse.json({ success: false, message: "Something went wrong" }, { status: 500 });
  }
}
