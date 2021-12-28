import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"
import axios from "axios"
import React, { useState,useEffect  } from 'react'
import style from './image.css'
import './radio.css'
import firstimage from './firstclass.jpg'
import economyimage from './economy.jpg'
import businessimage from './buisnessclass.jpg'
import { Text } from "react-native";
import { Button, Icon,Message } from 'semantic-ui-react';
import { useLocation } from "react-router-dom";

const SecondPage = props => {
    const location = useLocation();

    useEffect(() => {
       console.log(location.pathname); // result: '/secondpage'
       console.log(location.search); // result: '?query=abc'
       console.log(location.state.detail); // result: 'some_value'
       console.log(props.history.location.state.comingFromHome)
    }, [location]);

};

const CARD_OPTIONS = {
	iconStyle: "solid",
	style: {
		base: {
			iconColor: "#c4f0ff",
			color: "#fff",
			fontWeight: 500,
			fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
			fontSize: "25px",
			fontSmoothing: "antialiased",
			":-webkit-autofill": { color: "#fce883" },
			"::placeholder": { color: "#87bbfd" },
            backgroundColor: 'purple',
		},
		invalid: {
			iconColor: "#ffc7ee",
			color: "#ffc7ee"
		}
	}
}

export default function PaymentForm() {
    const [success, setSuccess ] = useState(false)
    const stripe = useStripe()
    const elements = useElements()


    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(window.history.state.state.amount)
     console.log(window.history.state.state.name)
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement)
        })


    if(!error) {
        try {
          
            const {id} = paymentMethod
            const response = await axios.post("http://localhost:5000/users/payment", {
                amount: window.history.state.state.amount,
                id,
                name: window.history.state.state.name
                
            })

            if(response.data.success) {
                console.log("Successful payment")
                setSuccess(true)
            }

        } catch (error) {
            console.log("Error", error)
        }
    } else {
        console.log(error.message)
    }
}

    return (
        <>
        {!success ? 
         <form style = {{width:"100vh",position: 'absolute', left: '45%', top: '40%',
         transform: 'translate(-50%, -50%)'}} onSubmit={handleSubmit}>
            <fieldset className="FormGroup">
                <div className="FormRow">
                    <CardElement options={CARD_OPTIONS}/>
                </div>
            </fieldset>
            <button  style={{width:'50px'}} class={"ui  blue   button"} >Pay </button>
        </form>
        :
       <div style={{position:'absolute',top:500,left:500, height:'900px',width:'900px'}}>
           <h2>You just booked a flight!</h2>
       </div> 
        }
            
        </>
    )
}
