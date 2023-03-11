const express = require("express");

const app = express();

require("./config");

const transact = require("./model/transaction");

const route = require("./routes/transactionroutes");

app.use(express.json());

app.use("/", route)


app.listen(8080)