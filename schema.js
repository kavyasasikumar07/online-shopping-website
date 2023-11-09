const mongoose  =require('mongoose')
const BookSchema = new mongoose.Schema({
    bid: Number,
    bname: String,
    pname: String,
    category: String,
    price: Number,
});
module.exports.Books = mongoose.model("Books",BookSchema);
