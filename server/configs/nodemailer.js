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


















































































import Nodemailer from "nodemailer"
import { MailtrapTransport } from "mailtrap"
// const Nodemailer = require("nodemailer");
// const { MailtrapTransport } = require("mailtrap");

const TOKEN = process.env.MAILTRAP_API_KEY

const transport = Nodemailer.createTransport(
    MailtrapTransport({
        token: TOKEN,
    })
);

const sender = {
    address: "hello@demomailtrap.co",
    name: "Mailtrap Test",
}



const sendEmail = async ({ to, subject, body }) => {
    const response = await transport.sendMail({
        from: sender,
        to,
        subject,
        html: body
    })
    return response
}



export default sendEmail






















// import Nodemailer from "nodemailer"
// import { MailtrapTransport } from "mailtrap"
// // const Nodemailer = require("nodemailer");
// // const { MailtrapTransport } = require("mailtrap");

// const TOKEN = process.env.MAILTRAP_API_KEY

// const transport = Nodemailer.createTransport(
//     MailtrapTransport({
//         token: TOKEN,
//     })
// );

// const sender = {
//     address: "hello@demomailtrap.co",
//     name: "Mailtrap Test",
// }
// const sendEmail = async ({ to, subject, body }) => {
//     const response = transport
//         .sendMail({
//             from: sender,

//         })
//         .then(console.log, console.error)
//     return response
// }
// export default sendEmail


