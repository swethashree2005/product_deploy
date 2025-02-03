const mongoose = require('mongoose')

const productSchema = {
    proId: {type: Number, required:true},
    name: {type: String, required:true},
    
}
module.exports = mongoose.model("Product", productSchema)