// email/template.js

function generateEmailTemplate({ fullName, phone, subject, recipientEmail, message }) {
  return `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
      <h2>Hello ${fullName || 'Visitor'},</h2>
      <p>Thank you for contacting us. Here's a summary of your message:</p>
      <ul>
        <li><strong>Full Name:</strong> ${fullName || 'N/A'}</li>
        <li><strong>Phone:</strong> ${phone || 'N/A'}</li>
        <li><strong>Email:</strong> ${recipientEmail || 'N/A'}</li>
        <li><strong>Subject:</strong> ${subject || 'No Subject'}</li>
        <li><strong>Message:</strong> ${message?.replace(/\n/g, '<br>') || 'No message provided'}</li>
      </ul>
      <p>We’ll get back to you shortly. 🚀</p>
      <hr>
      <small>© 2025 Harsh Patel. All rights reserved.</small>
    </div>
  `;
}

module.exports = generateEmailTemplate;
