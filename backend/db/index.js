const mongoose = require("mongoose")

if(process.env.NODE_ENV != 'production')
  require('dotenv').config();
  
let MONGODB_URI = process.env.MONGODB_URI


mongoose.connect(MONGODB_URI, {useUnifiedTopology: true, useNewUrlParser: true})
.then(() => {
  console.log('Succesfully connected to MongoDB.');
})
.catch(e => console.error('Connection error', e.message));

const db = mongoose.connection;
module.exports = db;