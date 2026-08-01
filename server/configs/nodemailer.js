// import nodemailer from 'nodemailer'

// const transporter = nodemailer.createTransport({
//     host: 'smtp-relay.brevo.com',
//     port: 587,
//     auth: {
//         user: process.env.SMTP_USER,
//         pass: process.env.SMTP_PASS
//     }
// })
// const sendEmail = async ({to, subject, body}) => {
//     const response = await transporter.sendMail({
//         from: process.env.SENDER_EMAIL,
//         to,
//         subject,
//         html:body
//     })
//     return response
// }
// export default sendEmail






















// import Nodemailer from 'nodemailer'
// import { MailtrapTransport } from 'mailtrap'

// const TOKEN = process.env.MAILTRAP_API_KEY
// console.log(TOKEN)
// const transporter = Nodemailer.createTransport(
//     MailtrapTransport({
//         token: TOKEN,
//     })
// );
// const sendEmail = async ({ to, subject, body }) => {
//     const response = await transporter.sendMail({
//         from: process.env.SENDER_EMAIL,
//         to,
//         subject,
//         html: body
//     })
//     return response
// }
// export default sendEmail
import FormData from "form-data"; // form-data v4.0.1
import Mailgun from "mailgun.js"; // mailgun.js v11.1.0

const sendSimpleMessage = () => {
    const mailgun = new Mailgun(FormData);
    const mg = mailgun.client({
        username: "api",
        key: process.env.API_KEY || "API_KEY",
        // When you have an EU-domain, you must specify the endpoint:
        // url: "https://api.eu.mailgun.net"
    });
}
const sendEmail = async ({ to, subject, body }) => {
    const response = await sendSimpleMessage.sendMail({
        from: process.env.SENDER_EMAIL,
        to,
        subject,
        html: body
    })
    return response
}
export default sendSimpleMessage










// import FormData from "form-data"; // form-data v4.0.1
// import Mailgun from "mailgun.js"; // mailgun.js v11.1.0

// async function sendSimpleMessage() {
//     const mailgun = new Mailgun(FormData);
//     const mg = mailgun.client({
//         username: "api",
//         key: process.env.API_KEY || "API_KEY",
//         // When you have an EU-domain, you must specify the endpoint:
//         // url: "https://api.eu.mailgun.net"
//     });
//     try {
//         const data = await mg.messages.create("sandboxd334b10d3325498ea7885978c47ecc91.mailgun.org", {
//             from: "Mailgun Sandbox <postmaster@sandboxd334b10d3325498ea7885978c47ecc91.mailgun.org>",
//             to: ["Carlos Ayoroa <carlosesteban.ayoroamurillo@gmail.com>"],
//             subject: "Hello Carlos Ayoroa",
//             text: "Congratulations Carlos Ayoroa, you just sent an email with Mailgun! You are truly awesome!",
//         });

//         console.log(data); // logs response data
//     } catch (error) {
//         console.log(error); //logs any error
//     }
// }
// export default sendSimpleMessage









// const sender = {
//     address: "hello@demomailtrap.co",
//     name: "Mailtrap Test",
// };
// const recipients = [
//     "carlosesteban.ayoroamurillo@gmail.com",
// ];

// transport
//     .sendMail({
//         from: process.env.MAILTRAP_SENDER_EMAIL,
//         to: recipients,
//         subject: "You are awesome!",
//         text: "Congrats for sending test email with Mailtrap!",
//         category: "Integration Test",
//     })
//     .then(console.log, console.error);