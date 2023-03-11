
const mongoose = require("mongoose");

const transactionschema = mongoose.Schema({
    product:{
        type:String,
        required:true},
    customers:{
        type:String,
        required:true},
    orders:{
        type:String,
        required:true},
    address:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model("transaction", transactionschema)