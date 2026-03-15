import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const SHEET_URL = process.env.GOOGLE_SHEET_URL;

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, phone, message, type, inquiry_type } = req.body;

  try {
    // メール送信
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "送信先のメールアドレスをここに入力",
      subject: type === "trial" ? "【体験予約】新しい予約が入りました" : "【お問い合わせ】新しいメッセージが届きました",
      html: `
        <h2>${type === "trial" ? "体験予約" : "お問い合わせ"}が届きました</h2>
        <p><strong>お名前：</strong>${name}</p>
        <p><strong>メール：</strong>${email}</p>
        <p><strong>電話番号：</strong>${phone || "未入力"}</p>
        ${inquiry_type ? `<p><strong>お問い合わせ種別：</strong>${inquiry_type}</p>` : ""}
        <p><strong>メッセージ：</strong>${message || "未入力"}</p>
      `,
    });

    // スプレッドシートに記録
    await fetch(SHEET_URL, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: JSON.stringify({ name, email, phone, message, type, inquiry_type }),
        redirect: "follow",
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}