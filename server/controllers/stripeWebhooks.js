import stripe from 'stripe'
import Booking from '../models/Bookings.js'
import { Purchase } from '../models/Purchase.js'
import User from '../models/User.js'

export const stripeWebhooks = async (request, response) => {
    console.log(request, 'request from stripewebhooks')
    const stripeInstance = new stripe(process.env.STRIPE_SECRET_KEY)
    const sig = request.headers['stripe-signature']
    let event
    try {
        event = stripeInstance.webhooks.constructEvent(request.body, sig, 'whsec_QibV8vJroeRScGnM6INgPUqUkJkrpExy')
    } catch (error) {
        return response.status(400).send(`webhook error ${error.message}`)
    }
    try {
        switch (event.type) {
            case 'payment_intent.succeeded': {
                const paymentIntent = event.data.object
                const sessionList = await stripeInstance.checkout.sessions.list({
                    payment_intent: paymentIntent.id
                })
                const session = sessionList.data[0]
                const { bookingId } = session.metadata
                await Booking.findByIdAndUpdate(bookingId, {
                    isPaid: true,
                    paymentLink: ''
                })
                const user = await User.findById('user_3Ln68t88mmnquW XSgn7daxHrt7K')
                const purchasesData = await Purchase.findById(user._id)
                purchasesData.status = 'completed'
                await purchasesData.save()
                

                // await inngest.send({
                //     name: 'app/show.booked',
                //     data: { bookingId }
                // })
                break;
            }
            //  case 'payment_intent.succeeded': {
            // const paymentIntent = event.data.object
            // const paymentIntentId = paymentIntent.id
            // const session = await stripeInstance.checkout.sessions.list({
            //     payment_intent:paymentIntentId
            // })
            // const { purchaseId } = session.data[0].metadata
            // const user = await User.findById('user_3Ln68t88mmnquW XSgn7daxHrt7K')
            //     const purchasesData = await Purchase.findById(user._id)
            //     purchasesData.status='completed'
                
            //     console.log('purchaseId', purchaseId)
            //     break;
            // }
                
                // console.log('purchaseData', purchaseData)
            // const userData = await User.findById(purchaseData.userId)
            // const courseData = await Course.findById(purchaseData.courseId.toString())
            // courseData.enrolledStudents.push(userData)
            // await courseData.save()
            // userData.enrolledCourses.push(courseData._id)
            // await userData.save()
            default:
                console.log('unhandled event type', event.type)
        }
        //        case 'payment_intent.succeeded': {
        //     const paymentIntent = event.data.object
        //     const paymentIntentId = paymentIntent.id
        //     const session = await stripeInstance.checkout.sessions.list({
        //         payment_intent:paymentIntentId
        //     })
        //     const { purchaseId } = session.data[0].metadata
        //     console.log('purchaseId', purchaseId)
        //     console.log('purchaseData', purchaseData)
        //     const userData = await User.findById(purchaseData.userId)
        //     const courseData = await Course.findById(purchaseData.courseId.toString())
        //     courseData.enrolledStudents.push(userData)
        //     await courseData.save()
        //     userData.enrolledCourses.push(courseData._id)
        //     await userData.save()
        //     break;
        // }
        response.json({
            received: true
        })
    } catch (error) {
        console.log('webhook processing error', err)
        response.status(500).send(error.message)
    }
}
