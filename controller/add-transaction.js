
const transaction = require("../model/transaction");

exports.newtransaction = async (req,res)=>{
try{
    const transactions = await transaction.find();
    res.json(transactions);
} catch (err){
    res.status(500).json({msg:err.msg})
}
};

exports.postransaction = async(req,res)=>{
const trans = new transaction({
    product:req.body.product,
    customers:req.body.customers,
    orders:req.body.orders,
    address:req.body.address
}); try{
    const save = await trans.save()
    res.status(201).json(save)
} catch(err){
    res.status(400).json({msg:err.msg})
}
};

exports.querytransaction = async(req,res)=>{
    let query = await transaction.find({
        "$or":[
            {product:{$regex:req.params.key}},
            {customers:{$regex:req.params.key}},
            {orders:{$regex:req.params.key}},
            {address:{$regex:req.params.key}}
        ]
    })
    res.send(query);
};