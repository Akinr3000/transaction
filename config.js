const express = require("express");

const mongoose = require("mongoose");

const app = express();


mongoose.connect(
    `mongodb+srv://Akinr3000:Akinr3000@cluster0.bqiybz5.mongodb.net/transactionhistory?retryWrites=true&w=majority`
).then(result => {
    console.log("connected");
}).catch(err => {
    console.log(err);
})