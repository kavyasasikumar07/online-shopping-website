const {Books} = require('./schema');

module.exports.insertstd = async (req, res) => {
    const b = new Books({
        bid: Number(req.body.bid),
        bname: req.body.bname,
        pname: req.body.pname,
        category: req.body.bcat,
        price: Number(req.body.bprice),
    });
    const Book = await Books.findOne({bid:Number(req.body.bid)});
    if(Book)
        return res.send({msg:"product exists in db"});
    const saved_b = await b.save();
    res.send(saved_b);
}

module.exports.getallbooks = async (req,res) => {
    const Book = await Books.find({});
    if(Book.length != 0)
        res.send(Book)
    else 
        res.send({msg: "no products found!"})
}

module.exports.getbook = async (req,res) => {
    const Book = await Books.findOne({bid:req.params.bid});
    if(Book)
        res.send(Book)
    else
        res.send({msg:"product not found!"});
}

module.exports.deletebook = async (req,res) => {
    const Book = await Books.findOneAndDelete({category:req.params.bcat});
    if(Book)
        res.send("product deleted sucessfully!");
    else
        res.send("product not exist!");
}


module.exports.updatebook = async (req,res) => {
    const Book = await Books.findOneAndUpdate({bid:req.params.bid},{bname: req.body.bname});
    if(Book)
        res.send("product updated sucessfully!");
    else
        res.send("product not exist!");
}


