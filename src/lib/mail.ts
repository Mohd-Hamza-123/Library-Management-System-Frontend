import nodemailer from "nodemailer";
import conf from "@/conf/conf"

interface Email {
    to: string;
    subject: string;
    text: string;
    resetLink: string;
}

export const resetPasswordEmail = async ({
    to,
    subject,
    text,
    resetLink
}: Email) => {
    try {
        const transporter = nodemailer.createTransport({
            host: conf.SMTP_HOST,
            port: conf.SMTP_PORT,
            // secure: true,
            auth: {
                user: conf.SMTP_USER,
                pass: conf.SMTP_PASS,
            },
        });

        const info = await transporter.sendMail({
            from: conf.SMTP_USER,
            to: to,
            subject: subject,
            text: text, // plain‑text body
            html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Password Reset</title>
  <style>
    body {
      background-color: #f4f4f7;
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
    }
    .email-wrapper {
      width: 100%;
      background-color: #f4f4f7;
      padding: 30px 0;
    }
    .email-content {
      max-width: 560px;
      margin: 0 auto;
      background-color: #ffffff;
      border-radius: 8px;
      padding: 40px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.05);
    }
    h1 {
      font-size: 22px;
      font-weight: bold;
      color: #333333;
      margin-bottom: 20px;
      text-align: center;
    }
    p {
      font-size: 16px;
      color: #555555;
      line-height: 1.6;
    }
    .button {
      display: inline-block;
      padding: 12px 24px;
      background-color: #4f46e5;
      color: #ffffff !important;
      border-radius: 6px;
      text-decoration: none;
      font-weight: bold;
      margin-top: 25px;
    }
    .footer {
      text-align: center;
      color: #999999;
      font-size: 12px;
      margin-top: 25px;
    }
  </style>
</head>

<body>
  <div class="email-wrapper">
    <div class="email-content">

      <h1>Password Reset Request</h1>

      <p>Hello,</p>

      <p>
        We received a request to reset your password for your MS Academy account.
        Click the button below to reset your password:
      </p>

      <p style="text-align: center;">
        <a href="${resetLink}" class="button">Reset Password</a>
      </p>

      <p>
        If you did not request a password reset, please ignore this email.
      </p>

      <p class="footer">
        © ${new Date().getFullYear()} MS Academy. All rights reserved.
      </p>

    </div>
  </div>
</body>
</html>
`});
        console.log(info)
        return {
            success: info.accepted.length > 0 ? true : false,
            message: "Email sent successfully",
        }
    } catch (error) {
        console.log("error in mail.ts", error instanceof Error ? error.message : error);
        return {
            success: false,
            error: "Failed to send email. Please try again."
        }
    }
}

