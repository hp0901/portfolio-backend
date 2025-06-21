const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/send-email", async (req, res) => {
  const { fullName, phone, subject, recipientEmail, message } = req.body; // Added 'message' for more content

  if (!recipientEmail) {
    return res.status(400).send("Recipient email is required");
  }

  try {
    // Create a Nodemailer transporter using Gmail service
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "hp98570018@gmail.com", // Your Gmail address
        pass: "fgvu zqmw bnqi dkkh",   // Your generated App password for Gmail
      },
    });

    // Define the email options
    const mailOptions = {
      from: `"Harsh Patel" `, // Sender name and email
      to: recipientEmail, // Recipient email address
      subject: `New Inquiry: ${subject || 'No Subject Provided'} from ${fullName || 'A Valued Visitor'}`, // Subject line
      html: `
        <div style="font-family: 'Inter', Arial, sans-serif; line-height: 1.6; color: #333; background: #f4f7f6; padding: 30px 0;">
          <div style="max-width: 650px; margin: auto; background: #ffffff; border-radius: 12px; box-shadow: 0 6px 20px rgba(0,0,0,0.1); overflow: hidden;">
            
            <!-- Header Section -->
            <div style="background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%); padding: 30px; text-align: center; color: white; border-top-left-radius: 12px; border-top-right-radius: 12px;">
              <img src="https://placehold.co/100x100/6a11cb/ffffff?text=LOGO" alt="Company Logo" style="width: 80px; height: 80px; border-radius: 50%; border: 3px solid rgba(255,255,255,0.3); margin-bottom: 15px;">
              <h1 style="margin: 0; font-size: 28px; font-weight: 700;">Thank You for Your Inquiry!</h1>
              <p style="font-size: 16px; opacity: 0.9;">We've received your message and will be in touch shortly.</p>
            </div>

            <!-- Content Section -->
            <div style="padding: 35px;">
              <p style="font-size: 17px; color: #555;">Dear ${fullName || 'Valued Visitor'},</p>
              <p style="font-size: 16px; margin-bottom: 25px;">
                Thank you for reaching out to us through our contact form. We truly appreciate your interest and the time you took to connect.
                This automated response confirms that we have successfully received your submission.
              </p>

              <h3 style="color: #2575fc; border-bottom: 2px solid #6a11cb; padding-bottom: 10px; margin-top: 30px; font-size: 20px;">Your Details:</h3>

              <table style="width: 100%; border-collapse: collapse; margin-bottom: 25px;">
                <tr>
                  <td style="padding: 10px 0; font-weight: bold; color: #6a11cb; width: 30%;">Full Name:</td>
                  <td style="padding: 10px 0; color: #333;">${fullName || 'N/A'}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; font-weight: bold; color: #6a11cb;">Phone:</td>
                  <td style="padding: 10px 0; color: #333;">${phone || 'N/A'}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; font-weight: bold; color: #6a11cb;">Subject:</td>
                  <td style="padding: 10px 0; color: #333;">${subject || 'No Subject Provided'}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; font-weight: bold; color: #6a11cb;">Email:</td>
                  <td style="padding: 10px 0; color: #333;">${recipientEmail || 'N/A'}</td>
                </tr>
                ${message ? `
                <tr>
                  <td style="padding: 10px 0; font-weight: bold; color: #6a11cb; vertical-align: top;">Message:</td>
                  <td style="padding: 10px 0; color: #333;">${message.replace(/\n/g, '<br>') || 'N/A'}</td>
                </tr>` : ''}
              </table>

              <h3 style="color: #2575fc; border-bottom: 2px solid #6a11cb; padding-bottom: 10px; margin-top: 30px; font-size: 20px;">What Happens Next?</h3>
              <p style="font-size: 16px; color: #555;">
                Our team is currently reviewing your inquiry and will get back to you within 1-2 business days.
                We aim to provide you with the most accurate and helpful information as quickly as possible.
                Please keep an eye on your inbox for our response.
              </p>

              <p style="font-size: 16px; color: #555; margin-top: 20px;">
                In the meantime, feel free to explore our website to learn more about our services,
                read customer testimonials, or check out our latest blog posts.
              </p>

              <!-- Call to Action Button -->
              <div style="margin-top: 40px; text-align: center;">
                <a href="https://your-website.com" style="background: #6a11cb; color: white; text-decoration: none; padding: 15px 35px; border-radius: 30px; font-weight: bold; font-size: 18px; display: inline-block; box-shadow: 0 5px 15px rgba(106,17,203,0.4); transition: background-color 0.3s ease;">
                  Explore Our Website
                </a>
              </div>

              <hr style="margin: 50px 0; border: none; border-top: 1px solid #eee;" />

              <!-- Footer Section -->
              <footer style="font-size: 14px; color: #aaa; text-align: center;">
                <p style="margin-bottom: 10px;">© 2025 Your Company Name. All rights reserved.</p>
                <div style="margin-top: 15px;">
                      <a href="https://www.facebook.com/share/19F3cN2KVj/" style="margin: 0 8px;">
                        <img src="https://img.icons8.com/ios-filled/24/2575fc/facebook-new.png" alt="Facebook" />
                      </a>
                      <a href="https://x.com/HarshPatel7292" style="margin: 0 8px;">
                        <img src="https://img.icons8.com/ios-filled/24/2575fc/twitter.png" alt="Twitter" />
                      </a>
                      <a href="https://youtube.com/yourchannel" style="margin: 0 8px;">
                        <img src="https://img.icons8.com/ios-filled/24/2575fc/youtube-play.png" alt="YouTube" />
                      </a>
                      <a href="https://whatsapp.com/dl/" style="margin: 0 8px;">
                        <img src="https://img.icons8.com/ios-filled/24/2575fc/whatsapp.png" alt="WhatsApp" />
                      </a>
                      <a href="https://www.instagram.com/h_p_0901?igsh=MWs1dXU2MHJyamJ0MA==" style="margin: 0 8px;">
                        <img src="https://img.icons8.com/ios-filled/24/2575fc/instagram-new.png" alt="Instagram" />
                      </a>
                      <a href="https://mail.google.com/mail/?view=cm&fs=1&to=hp9857018@gmail.com&su=Greetings&body=Hii%20Harsh%20Patel" style="margin: 0 8px;">
                        <img src="https://img.icons8.com/ios-filled/24/2575fc/gmail.png" alt="Gmail" />
                      </a>
                    </div>

                <p style="margin-top: 15px; font-size: 12px;">
                  This email was sent from an unmonitored address. Please do not reply directly to this email.
                </p>
              </footer>
            </div>
          </div>
        </div>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);
    res.status(200).send("Email sent successfully!");
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).send("Failed to send email.");
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
