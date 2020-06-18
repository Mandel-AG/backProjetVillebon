const Product = require('../models/productmodel');
const Media = require('../models/mediamodel');
const { getproductsQuery, createProductQuery, deleteProductQuery, updateProductQuery } = require('../queries/products.queries');

exports.getproducts = async (req,res, next) => {
   try{
       const products = await getproductsQuery();
       res.render('products',{products});
   }
   catch(e){
       next(e);
   }
}


exports.createProduct = async (req,res,next)=>{
   try{
       const url = req.protocol + '://' + req.get('host');
       let product = new Product({
           name:req.body.name,
           description:req.body.description,
           picture: url + '/products/' + req.file.filename
       });
       
      const newProduct = await createProductQuery(product)
      res.redirect('/products/add');
   }
   catch(e){
      next(e);
   }
}


exports.updateProduct = async(req,res, next) =>{
   try{
   const newproduct = req.body;
   const productId = req.params.id;
       await updateProductQuery(productId, newproduct)
       res.redirect('/products');
   }
   catch(e){
       next(e);
   }
}


exports.editProduct = async(req, res, next)=>{
    try{ 
        const product = await Product.findById({_id :req.params.id}).exec()
        res.render('updateproduct', {product});
    }
    catch(e){
        next(e);
    }
}



exports.deleteProduct = async (req,res, next)=>{
   try{
       const productId = req.params.id;
       await deleteProductQuery(productId)
       const products = await getproductsQuery()
       res.render('partials/product-list', {products});
   }
   catch(e){
       next(e);
   }
}