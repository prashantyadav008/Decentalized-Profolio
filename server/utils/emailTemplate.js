/** @format */

function generateEmailTemplate({ name, email, subject, message }) {
  return `
    <div style="font-family: 'Segoe UI', sans-serif; background-color: #f4f4f5; padding: 40px; color: #1a1a1a;">
      <div style="max-width: 650px; margin: auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 14px rgba(0,0,0,0.1);">
        
        <div style="background-color: #2e026e; padding: 24px;">
          <h1 style="color: #ffffff; margin: 0; font-size: 24px;">📩 New Contact Form Message</h1>
        </div>
        
        <div style="padding: 30px;">
          <p style="font-size: 18px; margin: 0 0 20px;">You've received a new message from your Website Contact Form:</p>

          <div style="margin-bottom: 20px;">
            <p style="margin: 8px 0;"><strong style="color: #2e026e;">Name:</strong> ${name}</p>
            <p style="margin: 8px 0;"><strong style="color: #2e026e;">Email:</strong> ${email}</p>
            <p style="margin: 8px 0;"><strong style="color: #2e026e;">Subject:</strong> ${subject}</p>
          </div>

          <div style="background-color: #f9f9f9; border-left: 4px solid #2e026e; padding: 15px 20px; border-radius: 6px; font-size: 16px; line-height: 1.6;">
            <strong style="color: #2e026e;">Message:</strong><br>
            <span style="white-space: pre-line;">${message}</span>
          </div>
        </div>

        <div style="background-color: #f0f0f0; padding: 16px; text-align: center; font-size: 13px; color: #777;">
          <p style="margin: 0;">This email was sent from your Website Contact Form.</p>
        </div>
        
      </div>
    </div>
  `;
}

module.exports = { generateEmailTemplate };
