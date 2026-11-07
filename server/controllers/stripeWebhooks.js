import stripe from 'stripe'
import Booking from '../models/Bookings.js'
import { Purchase } from '../models/Purchase.js'
// import { inngest } from '../inngest/index.js'
const payload = {
  "id": "evt_3UYlkqIHXFA0eb7y11Baaznf",
  "object": "event",
  "api_version": "2025-11-17.clover",
  "created": 1793966185,
  "data": {
    "object": {
      "id": "pi_3UYlkqIHXFA0eb7y1OBbzcNr",
      "object": "payment_intent",
      "allowed_payment_method_types": [
        "card",
        "link"
      ],
      "amount": 200,
      "amount_capturable": 0,
      "amount_details": {
        "tip": {}
      },
      "amount_received": 200,
      "application": null,
      "application_fee_amount": null,
      "automatic_payment_methods": null,
      "canceled_at": null,
      "cancellation_reason": null,
      "capture_method": "automatic_async",
      "client_secret": "pi_3UYlkqIHXFA0eb7y1OBbzcNr_secret_BwEWQunrtwa1iwbZyjo7KfYeU",
      "confirmation_method": "automatic",
      "created": 1793966184,
      "currency": "usd",
      "customer": null,
      "customer_account": null,
      "description": null,
      "excluded_payment_method_types": null,
      "last_payment_error": null,
      "latest_charge": "ch_3UYlkqIHXFA0eb7y1BdFvo9T",
      "livemode": false,
      "managed_payments": {
        "enabled": false
      },
      "metadata": {},
      "next_action": null,
      "on_behalf_of": null,
      "payment_details": {
        "customer_reference": null,
        "order_reference": "cs_test_a1YRAZZQLsAcON9bJ7Lmzn68DDamUTEEIMB7MjIExkgiXSNDmlKqHzelzX"
      },
      "payment_method": "pm_1UYlkqIHXFA0eb7y8doSUi4c",
      "payment_method_configuration_details": null,
      "payment_method_options": {
        "card": {
          "installments": null,
          "mandate_options": null,
          "network": null,
          "request_three_d_secure": "automatic"
        },
        "link": {
          "persistent_token": null
        }
      },
      "payment_method_types": [
        "card",
        "link"
      ],
      "payment_record": null,
      "presentment_details": {
        "presentment_amount": 2496,
        "presentment_currency": "bob"
      },
      "processing": null,
      "receipt_email": null,
      "review": null,
      "setup_future_usage": null,
      "shared_payment_granted_token": null,
      "shipping": null,
      "source": null,
      "statement_descriptor": null,
      "statement_descriptor_suffix": null,
      "status": "succeeded",
      "transfer_data": null,
      "transfer_group": null
    }
  },
  "livemode": false,
  "pending_webhooks": 4,
  "request": {
    "id": null,
    "idempotency_key": "8e36d5ec-dc85-4ba4-9759-471d32f5c159"
  },
  "type": "payment_intent.succeeded"
}
export const stripeWebhooks = async (request, response) => {
    console.log(request, 'request from stripewebhooks')
    const stripeInstance = new stripe(process.env.STRIPE_SECRET_KEY)
    const sig = request.headers['stripe-signature']
    let event
    try {
        event = stripeInstance.webhooks.constructEvent(payload, sig, 'whsec_NqQP0hfnCvOzNZO2b9BowWMZsbNf5N4B')
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

                // await inngest.send({
                //     name: 'app/show.booked',
                //     data: { bookingId }
                // })
                break;
            }
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
            // console.log('purchaseData', purchaseData)
            // const userData = await User.findById(purchaseData.userId)
            // const courseData = await Course.findById(purchaseData.courseId.toString())
            // courseData.enrolledStudents.push(userData)
            // await courseData.save()
            // userData.enrolledCourses.push(courseData._id)
            // await userData.save()
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
