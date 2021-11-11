const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');
const proxy = require("http-proxy-middleware");
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000
console.log(port)
app.use( (req, response, next)=> {
  response.setHeader("Access-Control-Allow-Origin", "*");
response.setHeader("Access-Control-Allow-Credentials", "true");
response.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
response.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");

  next();
});



app.use(cors())
app.use(express.json());

const uri = '';
console.log(uri)
mongoose.connect(  uri ||'mongodb://localhost/alpha-uni' , { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})





if(process.env.NODE_ENV === 'production') {
   app.use( express.static( path.join( __dirname,'..', 'build')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname,'..',  'build', 'index.html'))
    
  });
  
}

app.listen(port, () => {
    console.log(`Server is running on port:`+" "+port);
});

module.exports = function(app) {
  app.use(proxy('/api/**', { target: 'http://localhost:5000' }));
  app.use(proxy('/otherApi/**', { target: 'http://localhost:5000' }));
};