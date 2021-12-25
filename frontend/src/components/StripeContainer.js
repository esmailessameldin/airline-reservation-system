import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import React from "react"
import PaymentForm from "./PaymentForm"

const PUBLIC_KEY = "pk_test_51K6h77KdJWHdHhMRjxmBdggO3rr5H2jjnw8uY4HbIlmJoDXvmhxD6fNYJeIH0fA6VkbOEQgVTV6SKjcSTKwwUYoA00azSPqhmB"

const stripeTestPromise = loadStripe(PUBLIC_KEY)

export default function StripeContainer() {
	return (
		<Elements stripe={stripeTestPromise}>
			<PaymentForm />
		</Elements>
	)
}