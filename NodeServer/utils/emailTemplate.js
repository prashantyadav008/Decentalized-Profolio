/** @format */

function generateEmailTemplate({ name, email, subject, message }) {
  return `
    <div style="font-family: Arial, sans-serif; color: #000; background: #fff; padding: 20px; border: 1px solid #000; max-width: 600px;">
      <h2 style="border-bottom: 1px solid #000; padding-bottom: 10px;">New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <p><strong>Message:</strong></p>
      <p style="white-space: pre-line;">${message}</p>
      <hr style="border: 1px solid #000; margin-top: 20px;">
      <p style="font-size: 12px; color: #555;">This email was sent from your contact form.</p>
    </div>
  `;
}

module.exports = { generateEmailTemplate };
