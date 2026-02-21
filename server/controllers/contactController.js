import nodemailer from "nodemailer";

export const sendContactEmail = async (req, res) => {
  const { name, email, subject, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER,
      subject: `New Contact: ${subject}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };
    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "Email sent successfully" });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Email sending failed" });
  }
};
