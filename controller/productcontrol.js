const Product = require('../model/product');


exports.getAllProducts = async (req, res) =>{
    try{
        const products = await Product.find()
        res.json(products)
    }
    catch(err){
        res.status(500).json({msg : err.message})
    }
}
exports.getSingleProduct = async (req, res) =>{
    try {
        const product = await Product.findOne({proId: req.params.id})
        if(!product)
            return res.status(404).json({msg: 'Product Not found'})
        
        res.json(product)
    }
    catch(err){
        res.status(500).json({msg : err.message})
    }
}
exports.addNewProduct = async(req, res) =>{
    try{
        const newproduct = await Product.findOne({proId: req.body.proId})
        if(!newproduct){
            const addedProduct = await Product.create(req.body)
            res.json(addedProduct)
        }
        else{
            res.json({msg: 'Product already exixts'})
        }
    }
    catch(err){
        res.status(500).json({msg:err.message})
    }
}
exports.updateProduct = async (req,res) =>{
    try{
        const product = req.body
        const fetchedproduct = await Product.findOne({proId: product.proId})
        if(fetchedproduct)
        {
            await Product.updateOne({ proId: product.proId }, // Filter: Find the product by proId
                { $set: product }   )
            res.json(await Product.findOne({proId: product.proId}))
        }
        else{
            res.json({msg:'Product does not exists'})
        }
    }
    catch(err)
    {
        res.status(500).json({msg:err.message})
    }
}

exports.deleteProduct = async(req, res)=>
{
    try{
        const product = await Product.findOne({proId:req.params.id})
        if(product)
        {
            await Product.deleteOne({proId:product.proId})
            res.json(product)
        }
        else{
            res.json({msg:'product doesnt exists'})
        }}
        catch(err)
        {
            res.status(500).json({msg:err.message})
        }
    }
