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






















import nodemailer from 'nodemailer'
import { MailtrapTransport } from 'mailtrap'

const TOKEN = process.env.MAILTRAP_API_KEY

const transporter = Nodemailer.createTransport(
    MailtrapTransport({
        token: TOKEN,
    })
);
const sendEmail = async ({ to, subject, body }) => {
    const response = await transporter.sendMail({
        from: process.env.SENDER_EMAIL,
        to,
        subject,
        html: body
    })
    return response
}
export default sendEmail














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