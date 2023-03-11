const express = require("express");

const router = express.Router();

const transact = require("../controller/add-transaction");

router.get("/", transact.newtransaction);

router.post("/post", transact.postransaction);

router.get("/search/:key", transact.querytransaction);

module.exports = router