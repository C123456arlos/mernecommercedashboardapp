// import stripe from 'stripe'
// import Booking from '../models/Bookings.js'
// import { Purchase } from '../models/Purchase.js'

// export const stripeWebhooks = async (request, response) => {
//     console.log(request, 'request from stripewebhooks')
//     const stripeInstance = new stripe(process.env.STRIPE_SECRET_KEY)
//     const sig = request.headers['stripe-signature']
//     let event
//     try {
//         event = stripeInstance.webhooks.constructEvent(request.body, sig, 'whsec_QibV8vJroeRScGnM6INgPUqUkJkrpExy')
//     } catch (error) {
//         return response.status(400).send(`webhook error ${error.message}`)
//     }
//     // try {
//     //     switch (event.type) {
//     //         case 'payment_intent.succeeded': {
//     //             const paymentIntent = event.data.object
//     //             const sessionList = await stripeInstance.checkout.sessions.list({
//     //                 payment_intent: paymentIntent.id
//     //             })
//     //             const session = sessionList.data[0]
//     //             const { bookingId } = session.metadata
//     //             // await Booking.findByIdAndUpdate(bookingId, {
//     //             //     isPaid: true,
//     //             //     paymentLink: ''
//     //             // })
//                 // await Booking.findByIdAndUpdate('6aeba0b2a7fd83c0f1b1d394', {
//                 //     isPaid: true,
//                 //     paymentLink: ''
//                 // })

//     //             // await inngest.send({
//     //             //     name: 'app/show.booked',
//     //             //     data: { bookingId }
//     //             // })
//     //             break;
//     //         }
//     //         default:
//     //             console.log('unhandled event type', event.type)
//     //     }
//     //     //        case 'payment_intent.succeeded': {
//     //     //     const paymentIntent = event.data.object
//     //     //     const paymentIntentId = paymentIntent.id
//     //     //     const session = await stripeInstance.checkout.sessions.list({
//     //     //         payment_intent:paymentIntentId
//     //     //     })
//     //     //     const { purchaseId } = session.data[0].metadata
//     //     //     console.log('purchaseId', purchaseId)
//     //         // console.log('purchaseData', purchaseData)
//     //         // const userData = await User.findById(purchaseData.userId)
//     //         // const courseData = await Course.findById(purchaseData.courseId.toString())
//     //         // courseData.enrolledStudents.push(userData)
//     //         // await courseData.save()
//     //         // userData.enrolledCourses.push(courseData._id)
//     //         // await userData.save()
//     //     //     break;
//     //     // }
//     //     response.json({
//     //         received: true
//     //     })
//     // } catch (error) {
//     //     console.log('webhook processing error', err)
//     //     response.status(500).send(error.message)
//     // }
//         try {
//             switch (event.type) {
//                 case 'payment_intent.succeeded': {
//                     const paymentIntent = event.data.object
//                     const sessionList = await stripeInstance.checkout.sessions.list({
//                         payment_intent: paymentIntent.id
//                     })
//                     const session = sessionList.data[0]
//                     // const { purchaseId } = session.metadata
//                                 const { purchaseId } = session.data[0].metadata
//                                 const purchaseData = await Purchase.findById(purchaseId)
//                     purchaseData.status = 'completed'
//                     await purchaseData.save()
//                          const booking= await Booking.findByIdAndUpdate('6af0d347aed0ea81692c8527', {
//                     isPaid: true,
//                     paymentLink: ''
//                          })
//                     await booking.save()
                    // await Booking.findByIdAndUpdate(bookingId, {
                    //     isPaid: true,
                    //     paymentLink: ''
                    // })
    
//                     // await inngest.send({
//                     //     name: 'app/show.booked',
//                     //     data: { bookingId }
//                     // })
//                     break;
//                 }
//                 default:
//                     console.log('unhandled event type', event.type)
//             }
//             //        case 'payment_intent.succeeded': {
//             //     const paymentIntent = event.data.object
//             //     const paymentIntentId = paymentIntent.id
//             //     const session = await stripeInstance.checkout.sessions.list({
//             //         payment_intent:paymentIntentId
//             //     })
//             //     const { purchaseId } = session.data[0].metadata
//             //     console.log('purchaseId', purchaseId)
//                 // console.log('purchaseData', purchaseData)
//                 // const userData = await User.findById(purchaseData.userId)
//                 // const courseData = await Course.findById(purchaseData.courseId.toString())
//                 // courseData.enrolledStudents.push(userData)
//                 // await courseData.save()
//                 // userData.enrolledCourses.push(courseData._id)
//                 // await userData.save()
//             //     break;
//             // }
//             response.json({
//                 received: true
//             })
//         } catch (error) {
//             console.log('webhook processing error', err)
//             response.status(500).send(error.message)
//         }
// }













// import stripe from 'stripe'
// import Booking from '../models/Bookings.js'
// import { Purchase } from '../models/Purchase.js'

// export const stripeWebhooks = async (request, response) => {
//     console.log(request, 'request from stripewebhooks')
//     const stripeInstance = new stripe(process.env.STRIPE_SECRET_KEY)
//     const sig = request.headers['stripe-signature']
//     let event
//     try {
//         event = stripeInstance.webhooks.constructEvent(request.body, sig, 'whsec_QibV8vJroeRScGnM6INgPUqUkJkrpExy')
//     } catch (error) {
//         return response.status(400).send(`webhook error ${error.message}`)
//     }

//     if (event.type === 'payment_intent.succeeded') {

//           await  Booking.findByIdAndUpdate('6af0d1c986e8e2bd0632b99b', {
//                     isPaid: true,
//                     paymentLink: ''
//                 })
               
//             }
      
//         response.json({
//             received: true
//         })
   
// }








































































































































// import stripe from 'stripe'
// import Booking from '../models/Bookings.js'
// import { Purchase } from '../models/Purchase.js'

// export const stripeWebhooks = async (request, response) => {
//     console.log(request, 'request from stripewebhooks')
//     const stripeInstance = new stripe(process.env.STRIPE_SECRET_KEY)
//     const sig = request.headers['stripe-signature']
//     let event
//     try {
//         event = stripeInstance.webhooks.constructEvent(request.body, sig, 'whsec_QibV8vJroeRScGnM6INgPUqUkJkrpExy')
//     } catch (error) {
//         return response.status(400).send(`webhook error ${error.message}`)
//     }
//     // try {
//     //     switch (event.type) {
//     //         case 'payment_intent.succeeded': {
//     //             const paymentIntent = event.data.object
//     //             const sessionList = await stripeInstance.checkout.sessions.list({
//     //                 payment_intent: paymentIntent.id
//     //             })
//     //             const session = sessionList.data[0]
//     //             const { bookingId } = session.metadata
                // await Booking.findByIdAndUpdate(bookingId, {
                //     isPaid: true,
                //     paymentLink: ''
                // })
//                 // await Booking.findByIdAndUpdate('6aeba0b2a7fd83c0f1b1d394', {
//                 //     isPaid: true,
//                 //     paymentLink: ''
//                 // })

//     //             // await inngest.send({
//     //             //     name: 'app/show.booked',
//     //             //     data: { bookingId }
//     //             // })
//     //             break;
//     //         }
//     //         default:
//     //             console.log('unhandled event type', event.type)
//     //     }
//     //     //        case 'payment_intent.succeeded': {
//     //     //     const paymentIntent = event.data.object
//     //     //     const paymentIntentId = paymentIntent.id
//     //     //     const session = await stripeInstance.checkout.sessions.list({
//     //     //         payment_intent:paymentIntentId
//     //     //     })
//     //     //     const { purchaseId } = session.data[0].metadata
//     //     //     console.log('purchaseId', purchaseId)
//     //         // console.log('purchaseData', purchaseData)
//     //         // const userData = await User.findById(purchaseData.userId)
//     //         // const courseData = await Course.findById(purchaseData.courseId.toString())
//     //         // courseData.enrolledStudents.push(userData)
//     //         // await courseData.save()
//     //         // userData.enrolledCourses.push(courseData._id)
//     //         // await userData.save()
//     //     //     break;
//     //     // }
//     //     response.json({
//     //         received: true
//     //     })
//     // } catch (error) {
//     //     console.log('webhook processing error', err)
//     //     response.status(500).send(error.message)
//     // }
//         try {
//             switch (event.type) {
//                 case 'payment_intent.succeeded': {
//                     const paymentIntent = event.data.object
//                     const sessionList = await stripeInstance.checkout.sessions.list({
//                         payment_intent: paymentIntent.id
//                     })
//                     const session = sessionList.data[0]
//                     // const { purchaseId } = session.metadata
//                                 const { purchaseId } = session.data[0].metadata
//                                 const purchaseData = await Purchase.findById(purchaseId)
//                     purchaseData.status = 'completed'
//                     await purchaseData.save()
//                          const booking= await Booking.findByIdAndUpdate('6af0d347aed0ea81692c8527', {
//                     isPaid: true,
//                     paymentLink: ''
//                          })
//                     await booking.save()
//                     // await Booking.findByIdAndUpdate(bookingId, {
//                     //     isPaid: true,
//                     //     paymentLink: ''
//                     // })
    
//                     // await inngest.send({
//                     //     name: 'app/show.booked',
//                     //     data: { bookingId }
//                     // })
//                     break;
//                 }
//                 default:
//                     console.log('unhandled event type', event.type)
//             }
//             //        case 'payment_intent.succeeded': {
//             //     const paymentIntent = event.data.object
//             //     const paymentIntentId = paymentIntent.id
//             //     const session = await stripeInstance.checkout.sessions.list({
//             //         payment_intent:paymentIntentId
//             //     })
//             //     const { purchaseId } = session.data[0].metadata
//             //     console.log('purchaseId', purchaseId)
//                 // console.log('purchaseData', purchaseData)
//                 // const userData = await User.findById(purchaseData.userId)
//                 // const courseData = await Course.findById(purchaseData.courseId.toString())
//                 // courseData.enrolledStudents.push(userData)
//                 // await courseData.save()
//                 // userData.enrolledCourses.push(courseData._id)
//                 // await userData.save()
//             //     break;
//             // }
//             response.json({
//                 received: true
//             })
//         } catch (error) {
//             console.log('webhook processing error', err)
//             response.status(500).send(error.message)
//         }
// }



// import stripe from 'stripe'
// import Booking from "../models/Bookings.js";

// const stripeSecret = new stripe(process.env.STRIPE_SECRET_KEY)
// const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET

// export const stripeWebhooks = async (request, response) => {

//     let event;
//     if (endpointSecret) {
//         const signature = request.headers['stripe-signature'];
//         try {
//             event = stripe.webhooks.constructEvent(
//                 request.body,
//                 signature,
//                 'whsec_QibV8vJroeRScGnM6INgPUqUkJkrpExy'
//             );
//         } catch (err) {
//             console.log(`Webhook signature verification failed.`, err.message);
//             return response.sendStatus(400);
//         }
//         try {
//             switch (event.type) {
//                 case 'payment_intent.succeeded': {
//                     const booking = Booking.findById('6af0d83ec9846140833e2209')
//                     booking.isPaid=true
//                     await booking.save()
//                     break;
//                 }
//                 default:
//             }
//                 console.log(`Unhandled event type ${event.type}`);
//         response.json({ received: true });
//         } catch (error) {
//                 console.error('webhook processing error', error)
//         response.status(500).send('internal server error')
//         }

//     }
// }




// import stripe from 'stripe'
// import Booking from '../models/Bookings.js'
// export const stripeWebhooks = async (request, response) => {
//     const stripeInstance = new stripe(process.env.STRIPE_SECRET_KEY)
//     const sig = request.headers['stripe-signature']
//     let event
//     try {
//         event = stripeInstance.webhooks.constructEvent(request.body, sig, 'whsec_QibV8vJroeRScGnM6INgPUqUkJkrpExy')
//     } catch (error) {
//         response.status(400).send(`webhook error ${error.message}`)
//     }
//     if (event.type === 'payment_intent.succeeded') {
//         const paymentIntent = event.data.object
//         const paymentIntentId = paymentIntent.id
//         const session = await stripeInstance.checkout.sessions.list({
//             payment_intent: paymentIntentId
//         })
//         const { bookingId } = session.data[0].metadata
//                         await Booking.findByIdAndUpdate(bookingId, {
//                     isPaid: true,
//                     paymentLink: ''
//                 })
//     } else {
//         console.log('unhandled event type', event.type)
//     }
//     response.json({ received: true })
// }































// try {
//     switch (event.type) {
//         case 'payment_intent.succeeded': {
//             const paymentIntent = event.data.object
//             const paymentIntentId = paymentIntent.id
//             const session = await stripeInstance.checkout.sessions.list({
//                 payment_intent:paymentIntentId
//             })
//             const { purchaseId } = session.data[0].metadata
//             const purchaseData = await Purchase.findById(purchaseId)
//                 purchaseData.status = 'completed'
//                 await purchaseData.save()
                
//                 const courseData= await Course.findById(purchaseData.courseId)
//                 courseData.enrolledStudents.push(courseData.userId)
//                 await courseData.save()
//                 const userData = await User.findById(purchaseData.userId)
//                 userData.enrolledCourses.push(courseData._id)
//             await userData.save()
//             break;
//         }
//         case 'payment_intent.payment_failed': {
//             const paymentIntent = event.data.object
//             const paymentIntentId = paymentIntent.id
//             const session = await stripeInstance.checkout.sessions.list({
//                 payment_intent:paymentIntentId
//             })
//             const { purchaseId } = session.data[0].metadata
//             const purchaseData = await Purchase.findById(purchaseId)
//             purchaseData.status = 'failed'
//             await purchaseData.save()
//             break;
//         }
//         default:
//             console.log(`unhandled event type ${event.type}`)
//     }
//         response.json({ received: true })
//     } catch (error) {
//         console.log('stripe error', error)
//         response.status(400).send(`webhook err ${error.message}`)
//     }
    

















// import stripe from 'stripe'
// import Booking from '../models/Bookings.js'

// import { Purchase } from '../models/Purchase.js'
// import User from '../models/User.js'

// export const stripeWebhooks = async (request, response) => {
//  console.log(request, 'request from stripewebhooks')
//     const stripeInstance = new stripe(process.env.STRIPE_SECRET_KEY)
//     const sig = request.headers['stripe-signature']
//     let event
//     try {
//         event = stripeInstance.webhooks.constructEvent(request.body,
//  sig, process.env.STRIPE_WEBHOOK_SECRET)
//     } catch (error) {
//         return response.status(400).send(`webhook error ${error.message}}`)
//     }
//     try {

//             switch (event.type) {
//         //         case 'payment_intent.succeeded': {
//         //     const paymentIntent = event.data.object
//         //     const paymentIntentId = paymentIntent.id
//         //     const session = await stripeInstance.checkout.sessions.list({
//         //         payment_intent:paymentIntentId
//         //     })
//         //     const { bookingId } = session.data[0].metadata        
//         //                                await Booking.findByIdAndUpdate(bookingId, {
//         //                 isPaid: true,
//         //                 paymentLink: ''
//         //             }) 
//         //             await Purchase.findByIdAndDelete('6aeb921f8d02cd3afbc7c76e')
//         //             const purchaseData = await Purchase.findById('6aeb921f8d02cd3afbc7c76e')
//         //             purchaseData.status = 'completed'
//         //             await purchaseData.save()
//         //     break;
//         // }
//                 case 'payment_intent.succeeded': {
//             const paymentIntent = event.data.object
//             const paymentIntentId = paymentIntent.id
//             const session = await stripeInstance.checkout.sessions.list({
//                 payment_intent:paymentIntentId
//             })
//             const { purchaseId } = session.data[0].metadata
//             // const purchaseData = await Purchase.findById(purchaseId)
//             //     purchaseData.status = 'completed'
//             //     await purchaseData.save()
                
//             //     const courseData= await Course.findById(purchaseData.courseId)
//             //     courseData.enrolledStudents.push(courseData.userId)
//             //     await courseData.save()
//             //     const userData = await User.findById(purchaseData.userId)
//             //     userData.enrolledCourses.push(courseData._id)
//             // await userData.save()
//             break;
//         }
//         case 'payment_intent.payment_failed': {
//             const paymentIntent = event.data.object
//             const paymentIntentId = paymentIntent.id
//             const session = await stripeInstance.checkout.sessions.list({
//                 payment_intent:paymentIntentId
//             })
//             const { purchaseId } = session.data[0].metadata
//             const user = await User.findById('user_3Ln68t88mmnquWXSgn7daxHrt7K')
//                 const purchasesData = await Purchase.findById(user._id)
//                 purchasesData.status='completed'
                
//                 console.log('purchaseId', purchaseId)
//                 break;
//             }
                
//             //     console.log('purchaseData', purchaseData)
//             // const userData = await User.findById(purchaseData.userId)
//             // const courseData = await Course.findById(purchaseData.courseId.toString())
//             // courseData.enrolledStudents.push(userData)
//             // await courseData.save()
//             // userData.enrolledCourses.push(courseData._id)
//             // await userData.save()
//             default:
//                 console.log('unhandled event type', event.type)
//         }
//         //        case 'payment_intent.succeeded': {
//         //     const paymentIntent = event.data.object
//         //     const paymentIntentId = paymentIntent.id
//         //     const session = await stripeInstance.checkout.sessions.list({
//         //         payment_intent:paymentIntentId
//         //     })
//         //     const { purchaseId } = session.data[0].metadata
//         //     console.log('purchaseId', purchaseId)
//         //     console.log('purchaseData', purchaseData)
//         //     const userData = await User.findById(purchaseData.userId)
//         //     const courseData = await Course.findById(purchaseData.courseId.toString())
//         //     courseData.enrolledStudents.push(userData)
//         //     await courseData.save()
//         //     userData.enrolledCourses.push(courseData._id)
//         //     await userData.save()
//         //     break;
//         // }
//         response.json({
//             received: true
//         })
//     } catch (error) {
//         console.log('webhook processing error', err)
//         response.status(500).send(error.message)
//     }
// }













import stripe from 'stripe'
import Booking from '../models/Bookings.js'

import { Purchase } from '../models/Purchase.js'
import User from '../models/User.js'







export const stripeWebhooks = async (request, response) => {
    console.log('request stripe', request)
    const stripeInstance=new stripe(process.env.STRIPE_SECRET_KEY)
    const sig = request.headers['stripe-signature']
    // const payload = request.body.toString()
    // const body= request.body
    // const payload = JSON.stringify(body)
    let event
    try {
        // event= stripe.webhooks.constructEvent(request.body, sig, process.env.STRIPE_WEBHOOK_SECRET)
        event= stripe.webhooks.constructEvent(request.body, sig, 'whsec_NqQP0hfnCvOzNZO2b9BowWMZsbNf5N4B')
        // event= stripe.webhooks.constructEvent(body, sig, 'whsec_ucl1DmzUgj7TFdcVy1TRIxLhFKKuRBbh')
    } catch (error) {
         console.log('stripe error', error)
        response.status(400).send(`webhook event error ${error.message}`)
    }
    try {
    switch (event.type) {
        case 'payment_intent.succeeded': {
            const paymentIntent = event.data.object
            const paymentIntentId = paymentIntent.id
            const session = await stripeInstance.checkout.sessions.list({
                payment_intent:paymentIntentId
            })
            const { bookingId, purchaseId } = session.data[0].metadata
                              await Booking.findByIdAndUpdate(bookingId, {
                        isPaid: true,
                        paymentLink: ''
                    }) 
            const purchaseData = await Purchase.findById(purchaseId)
                purchaseData.amount = 2
                await purchaseData.save()
                
                const courseData= await Course.findById(purchaseData.courseId)
                courseData.enrolledStudents.push(courseData.userId)
                await courseData.save()
                const userData = await User.findById(purchaseData.userId)
                userData.enrolledCourses.push(courseData._id)
            await userData.save()
            break;
        }
        case 'payment_intent.payment_failed': {
            const paymentIntent = event.data.object
            const paymentIntentId = paymentIntent.id
            const session = await stripeInstance.checkout.sessions.list({
                payment_intent:paymentIntentId
            })
            const { purchaseId } = session.data[0].metadata
            const purchaseData = await Purchase.findById(purchaseId)
            purchaseData.status = 'failed'
            await purchaseData.save()
            break;
        }
        default:
            console.log(`unhandled event type ${event.type}`)
    }
        response.json({ received: true })
    } catch (error) {
        console.log('stripe error', error)
        response.status(400).send(`webhook err ${error.message}`)
    }
}