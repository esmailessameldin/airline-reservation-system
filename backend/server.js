const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;  
app.use(cors());
//app.use(bodyParser.urlencoded({extended=true}))
//app.use(bodyParser.json())
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


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
