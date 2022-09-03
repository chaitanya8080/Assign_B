


const mongoose = require("mongoose");


const productSchema = new mongoose.Schema({

    title:{type:String, required:true, unique:true},
    desc:{type:String, required:true},
    photo:{type:String, required:false},
    username:{type:String, default:""},
    categories:[{type:String, required:false}],
},
    {
        versionKey:false,
        timestamps:true
    }
)

const Product = mongoose.model("product", productSchema);

module.exports = Product;