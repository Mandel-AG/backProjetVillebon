const app = require('express').Router();
const { getproducts, createProduct, updateProduct, deleteProduct, editProduct } = require('../controllers/product.controller');
const multer = require('multer');deleteProduct
const upload = multer({ storage: multer.diskStorage({
    destination : (req, file, cb)=>{
        cb(null, '/home/badel/Bureau/projetVillebonBD/files/products')
    },
    filename : (req, file, cb)=>{
        cb(null, Date.now() + '-' + file.originalname)
    }
    })
});


// Create product 
app.post('/', upload.single('file'), createProduct);

// Read product
app.get('/',getproducts)

// Update product
app.post('/:id', updateProduct)

app.get('/editProduct/:id', editProduct)


// Delete 1 product
app.delete('/:id',deleteProduct)

//view add Product
app.get('/add', (req,res)=>{
    res.render('addproduct');
})

module.exports = app;