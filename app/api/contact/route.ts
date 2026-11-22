import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { name, phone, email, service, preferred, message, locale } = await request.json();

    // Basic validation
    if (!name || !phone || !service) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // In a real app, this would go to a database or email service
    // For now, we'll simulate success
    console.log("Contact form submission:", {
      name,
      phone,
      email,
      service,
      preferred,
      message,
      locale,
    });

    return NextResponse.json(
      { success: true, message: "تم إرسال الطلب بنجاح" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}