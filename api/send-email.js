import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, phone, message, type } = req.body;

  try {
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "256hayato.work@gmail.com",
      subject: type === "trial" ? "【体験予約】新しい予約が入りました" : "【お問い合わせ】新しいメッセージが届きました",
      html: `
        <h2>${type === "trial" ? "体験予約" : "お問い合わせ"}が届きました</h2>
        <p><strong>お名前：</strong>${name}</p>
        <p><strong>メール：</strong>${email}</p>
        <p><strong>電話番号：</strong>${phone}</p>
        <p><strong>メッセージ：</strong>${message}</p>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}