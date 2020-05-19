const Product = require('../models/productmodel');



exports.getproductsQuery = () =>{
    return Product.find({}).exec()
}


exports.createProductQuery = (product) =>{
    return product.save()
}


exports.deleteProductQuery = (productId) =>{
    return Product.findByIdAndDelete(productId).exec()
}


exports.updateProductQuery = (productId, newProduct) =>{
    return Product.findByIdAndUpdate(productId, 
        {$set: newProduct}, {runValidators:true}).exec()
}
