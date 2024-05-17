import nodemailer from 'nodemailer';

export function sendEmail(email, completedCount, code) {
  return new Promise((resolve, reject) => {
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });

    let mailOptions = {
      from: process.env.EMAIL,
      to: email,
      subject: "Program Completion Notification",
      html: `
        <p>Thank you for completing ${completedCount} program${completedCount > 1 ? 's' : ''}!</p>
     
        ${completedCount === 3 ? '<p>One program is remaining. Keep it up!</p>' : ''}
        ${completedCount === 4 ? '<p>Congratulations! You have completed all the programs!</p>' : ''}
        <p>Your unique code: ${code}</p>
      `,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log("error", error, info);
        reject(error);
      } else {
        console.log("success");
        resolve({ status: true, message: "Email sent successfully" });
      }
    });
  });
}
