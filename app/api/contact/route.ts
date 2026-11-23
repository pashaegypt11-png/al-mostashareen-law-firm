import { NextResponse } from "next/server";
import { Resend } from "resend";

// تهيئة Resend فقط على السيرفر — لا يتم كشف المفتاح للمتصفح
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email, service, preferred, message, locale } = body;

    // التحقق من الحقول المطلوبة
    if (!name || !phone || !service) {
      return NextResponse.json(
        { error: locale === "ar" ? "الحقول المطلوبة ناقصة" : "Missing required fields" },
        { status: 400 }
      );
    }

    // التحقق من أن متغير الإيميل مضبوط
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("RESEND_API_KEY is not configured");
      return NextResponse.json(
        { error: locale === "ar" ? "خطأ في الإعدادات" : "Configuration error" },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    const from = process.env.EMAIL_FROM || "AL MOSTASHAREEN LAW FIRM <onboarding@resend.dev>";
    const to = process.env.CONTACT_TO_EMAIL || "shaimaazulfikar@gmail.com";

    // إرسال الإيميل عبر Resend
    const { error } = await resend.emails.send({
      from,
      to: [to],
      subject: locale === "ar"
        ? "طلب استشارة قانونية جديد"
        : "New Legal Consultation Request",
      text: `
الاسم: ${name}
الهاتف: ${phone}
البريد الإلكتروني: ${email || "غير مقدم"}
الخدمة: ${service}
طريقة التواصل المفضلة: ${preferred || "غير محدد"}
الرسالة: ${message || "لا يوجد"}
اللغة: ${locale}
      `,
      replyTo: email || undefined,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: locale === "ar" ? "فشل في إرسال الطلب" : "Failed to send request" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: locale === "ar" ? "تم إرسال الطلب بنجاح" : "Request sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
