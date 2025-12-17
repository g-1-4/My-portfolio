const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const pageController = {
  submitContact: async (req, res) => {
    try {
      const { firstName, lastName, email, message } = req.body;

      if (!firstName || !email || !message) {
        return res.status(400).json({
          success: false,
          message: "All fields are required",
        });
      }

      if (message.length > 1000) {
        return res.status(400).json({
          success: false,
          message: "Message must be less than 1000 characters",
        });
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({
          success: false,
          message: "Please provide a valid email address",
        });
      }

      // Data Cleaning
      const cleanedData = {
        firstName: firstName.trim(),
        lastName: lastName.trim() || "",
        email: email.trim().toLowerCase(),
        message: message.trim(),
      };

      // My email
      const mailToMe = {
        from: process.env.EMAIL_USER,
        to: "gowthamarepalli09@gmail.com",
        subject: `New Contact Form Submission from ${cleanedData.firstName}${
          cleanedData.lastName ? " " + cleanedData.lastName : ""
        }`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
              New Contact Form Submission
            </h2>
            
            <div style="background-color: #f8f9fa; padding: 20px; border-radius: 5px; margin: 20px 0;">
              <h3 style="color: #007bff; margin-top: 0;">Contact Details:</h3>
              <p><strong>Name:</strong> ${cleanedData.firstName} ${
          cleanedData.lastName
        }</p>
              <p><strong>Email:</strong> ${cleanedData.email}</p>
            </div>
            
            <div style="background-color: #ffffff; padding: 20px; border-left: 4px solid #007bff; margin: 20px 0;">
              <h3 style="color: #333; margin-top: 0;">Message:</h3>
              <p style="line-height: 1.6; color: #555;">${cleanedData.message.replace(
                /\n/g,
                "<br>"
              )}</p>
            </div>
            
            <div style="margin-top: 30px; padding: 15px; background-color: #e9ecef; border-radius: 5px;">
              <p style="margin: 0; font-size: 12px; color: #666;">
                This email was sent from your portfolio website contact form.
                <br>
                Sent at: ${new Date().toLocaleString()}
              </p>
            </div>
          </div>
        `,
      };

      // Reply
      const autoReply = {
        from: process.env.EMAIL_USER,
        to: cleanedData.email,
        subject: "Thank you for contacting me!",
        html: `
          <div
      style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto"
    >
      <h2
        style="
          color: #333;
          border-bottom: 2px solid #007bff;
          padding-bottom: 10px;
        "
      >
        Thanks for getting in touch!
      </h2>

      <p>Hi ${cleanedData.firstName},</p>

      <p>
        I really appreciate you reaching out through my portfolio website! I've
        received your message and will get back to you as soon as I can.
      </p>

      <div
        style="
          background-color: #f1f3f5;
          padding: 15px;
          border-left: 4px solid #007bff;
          border-radius: 5px;
          margin: 20px 0;
        "
      >
        <h4 style="color: #007bff; margin-top: 0">Your message:</h4>
        <p style="font-style: italic; color: #555">"${cleanedData.message}"</p>
      </div>

      <p>
        While you're waiting, feel free to check out some of my latest work or
        connect with me on social platforms:
      </p>
      <ul style="padding-left: 20px">
        <li>
          <a
            href="https://www.linkedin.com/in/gowtham-sriram-arepalli-71b79223a/"
            style="color: #007bff; text-decoration: none"
            >LinkedIn</a
          >
        </li>
        <li>
          <a
            href="https://github.com/g-1-4"
            style="color: #007bff; text-decoration: none"
            >GitHub</a
          >
        </li>
      </ul>

      <p>
        Talk to you soon!<br />
        <strong>Gowtham Sriram Arepalli</strong>
      </p>

      <div
        style="
          margin-top: 30px;
          padding: 15px;
          background-color: #e9ecef;
          border-radius: 5px;
        "
      >
        <p style="margin: 0; font-size: 12px; color: #666; text-align: center">
          This is an automated message—no need to reply. <br />
          If something is urgent, feel free to contact me directly at
          <a href="mailto:gowthamarepalli09@gmail.com" style="color: #007bff"
            >gowthamarepalli09@gmail.com</a
          >
        </p>
      </div>
    </div>
        `,
      };

      // Send both emails
      await Promise.all([
        transporter.sendMail(mailToMe),
        transporter.sendMail(autoReply),
      ]);

      console.log(
        `Contact form submission received from: ${
          cleanedData.email
        } at ${new Date().toISOString()}`
      );
      console.log("Sending success response to frontend");
      res.status(200).json({
        success: true,
        message: "Thank you for your message! I will get back to you soon.",
      });
    } catch (error) {
      console.error("Contact form error:", error);

      res.status(500).json({
        success: false,
        message:
          "Sorry, there was an error sending your message. Please try again or email me directly at gowthamarepalli09@gmail.com",
      });
    }
  },
};

module.exports = pageController;
