const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const stripe = require('stripe')("sk_test_51K6h77KdJWHdHhMRgAiJjmiVqVT5dbDrWHQUkG2N0OlKEuT9UUNTc4xviu9Xhm0kf0LPVcTPk3h9aN1xj2WdW9S700TEUPauSL");
const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
const db= 'mongodb+srv://som3a:som3a@cluster0.xuqp3.mongodb.net/airline-system?retryWrites=true&w=majority'
try {
  mongoose.connect(
   db,
   {
     useNewUrlParser: true
   }
 ).then( console.log('MongoDB is Connected...'+" "+db))

} catch (err) {
   console.log("hello");
 console.error(err.message);
 process.exit(1);
}
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})
const AdminRouter = require('./routes/admin');
const UserRouter = require('./routes/users');
app.use('/admin', AdminRouter);
app.use('/users', UserRouter);


app.post("/payment", cors(), async (req, res) => {
	let { amount, id } = req.body
	try {
    console.log(process.env.STRIPE_SECRET_TEST)
		const payment = await stripe.paymentIntents.create({
			amount,
			currency: "USD",
			description: "Spatula company",
			payment_method: id,
			confirm: true
		})
		console.log("Payment", payment)
		res.json({
			message: "Payment successful",
			success: true
		})
	} catch (error) {
		console.log("Error", error)
		res.json({
			message: "Payment failed",
			success: false
		})
	}
})



app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
