import { Inngest } from "inngest"
import User from "../models/User.js"
import Booking from "../models/Bookings.js"
import Show from "../models/Show.js"
import sendEmail from "../configs/nodemailer.js"
import sendSimpleMessage from "../configs/nodemailer.js"
export const inngest = new Inngest({ id: 'movie-ticket-booking' })
const syncUserCreation = inngest.createFunction(
    { id: 'sync-user-from-clerk' },
    { event: 'clerk/user.created' },
    async ({ event }) => {
        const { id, first_name, last_name, email_addresses, image_url } = event.data
        const userData = {
            _id: id,
            email: email_addresses[0].email_address,
            name: first_name + ' ' + last_name,
            image: image_url
        }
        await User.create(userData)
    }
)
const syncUserDeletion = inngest.createFunction(
    { id: 'delete-user-with-clerk' },
    { event: 'clerk/user.deleted' },
    async ({ event }) => {
        const { id } = event.data
        await User.findByIdAndDelete(id)
    }
)
const syncUserUpdation = inngest.createFunction(
    { id: 'update-user-with-clerk' },
    { event: 'clerk/user.updated' },
    async ({ event }) => {
        const { id, first_name, last_name, email_addresses, image_url } = event.data
        const userData = {
            _id: id,
            email: email_addresses[0].email_address,
            name: first_name + ' ' + last_name,
            image: image_url
        }
        await User.findByIdAndUpdate(id, userData)
    }
)
const releaseSeatsAndDeleteBooking = inngest.createFunction(
    { id: 'release-seats-delete-booking' },
    { event: 'app/checkpayment' },
    async ({ event, step }) => {
        const tenMinutesLater = new Date(Date.now() + 10 * 60 * 1000)
        await step.sleepUntil('wait-for-10-minutes', tenMinutesLater)
        await step.run('check-payment-status', async () => {
            const bookingId = event.data.bookingId
            const booking = await Booking.findById(bookingId)
            if (!booking.isPaid) {
                const show = await Show.findById(booking.show)
                booking.bookedSeats.forEach((seat) => {
                    delete show.occupiedSeats[seat]
                })
                show.markModified('occupiedSeats')
                await show.save()
                await Booking.findByIdAndDelete(booking._id)
            }
        })
    }
)
const sendBookingConfirmationEmail = inngest.createFunction(
    { id: 'send-booking-confirmation-email' },
    { event: 'app/show.booked' },
    async ({ event, step }) => {
        const { bookingId } = event.data
        const booking = await Booking.findById(bookingId).populate({
            path: 'show',
            populate: { path: 'movie', model: 'Movie' }
        }).populate('user')
        await sendEmail({
            to: booking.user.email,
            subject: `payment confirmation ${booking.show.movie.title} booked`,
            body: `<div style='font-family:Arial'>
        <h2>hi ${booking.user.name}</h2>
        <p>your booking for ${booking.show.movie.title} is confirmed</p>
        <p> date:
        ${new Date(booking.show.showDateTime).toLocaleDateString('en-US', { timeZone: 'Europe/London' })}
        time:
        ${new Date(booking.show.showDateTime).toLocaleTimeString('en-US', { timeZone: 'Europe/London' })}
        </p>
        <p>enjoy the show</p>
        <p>thanks for booking with us <br/> - cesteam</p>
        </div>`
        })
    }
)
const sendShowReminders = inngest.createFunction(
    { id: 'send-show-reminders' },
    { cron: '0 */8 * * *' },
    async ({ step }) => {
        const now = new Date()
        const in8Hours = new Date(now.getTime() + 8 * 60 * 60 * 1000)
        const windowStart = new Date(in8Hours.getTime() - 10 * 60 * 1000)
        const reminderTasks = await step.run('prepare-reminder-tasks', async () => {
            const shows = await Show.find({
                showTime: { $gte: windowStart, $lte: in8Hours }
            }).populate('movie')
            const tasks = []
            for (const show of shows) {
                if (!show.movie || !show.occupiedSeats) continue;
                const userIds = [...new set(Object.values(show.occupiedSeats))]
                if (userIds.length === 0) continue;
                const users = await User.find({ _id: { $in: userIds } }).select('name email')
                for (const user of users) {
                    tasks.push({
                        userEmail: user.email,
                        userName: user.name,
                        movieTitle: show.movie.title,
                        showTime: show.showTime
                    })
                }
            }
            return tasks
        })
        if (reminderTasks.length === 0) {
            return { sent: 0, message: 'no reminders to send' }
        }
        const results = await step.run('send-all-reminders', async () => {
            return await Promise.allSettled(
                reminderTasks.map(task => sendBookingConfirmationEmail({
                    to: task.userEmail,
                    subject: `reminder your movie ${task.movieTitle} starts soon`,
                    body: `<div>
                    <h2>${task.userName}</h2>
                    <p>quick reminder</p>
                    <h3>${task.movieTitle}</h3>
                    <p>is scheduled for ${new Date(task.showTime).toLocaleDateString('en-US', { timeZone: 'Europe/London' })} </p>
                    <p>is scheduled for ${new Date(task.showTime).toLocaleTimeString('en-US', { timeZone: 'Europe/London' })} </p>
                    <p>starts in approximately 8 hours - make sure you are ready</p>
                    <br/>
                    <p>enjoy the show
                    <br/>
                    cesteam team</p>
                    </div>`
                }))
            )
        })
        const sent = results.filter(r => r.status === 'fulfilled').length
        const failed = result.length - sent
        return {
            sent, failed, message: `sent ${sent} reminder, ${failed} failed`
        }
    }
)
const sendNewShowNotifications = inngest.createFunction(
    { id: 'send-new-show-notifications' },
    { event: 'app/show.added' },
    async ({ event }) => {
        const { movieTitle } = event.data
        const users = await User.find({})
        for (const user of users) {
            const userEmail = 'c95007346@gmail.com'
            // const userEmail = user.email
            const userName = 'carlos null'
            const subject = `new show added ${movieTitle}`
            const body = `<div>
            <h2>${userName}</h2>
            <p>we just added a new show to our library</p>
            <h3>${movieTitle}</h3>
            <p>visit our website</p>
            <br/>
            <p>Thanks <br/> cesteam team</p>
            </div>`
            await sendEmail({
                to: 'c95007346@gmail.com', subject,
                body,
            })
        }
        return { message: 'notifications sent' }

    }
)
export const functions = [syncUserCreation,
    syncUserDeletion, syncUserUpdation,
    releaseSeatsAndDeleteBooking, sendBookingConfirmationEmail,
    sendShowReminders,
    sendNewShowNotifications]