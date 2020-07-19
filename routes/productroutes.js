const app = require('express').Router();
const { getproducts, createProduct, updateProduct, deleteProduct, editProduct } = require('../controllers/product.controller');
const multer = require('multer');deleteProduct
const GridFsStorage = require('multer-gridfs-storage');
const crypto = require('crypto');
const path = require('path')

// const upload = multer({ storage: multer.diskStorage({
//     destination : (req, file, cb)=>{
//         cb(null, '/home/badel/Bureau/projetVillebonBD/files/products')
//     },
//     filename : (req, file, cb)=>{
//         cb(null, Date.now() + '-' + file.originalname)
//     }
//     })
// });




const storage = new GridFsStorage({
  url: 'mongodb+srv://badel:badel@cluster0-f8esg.mongodb.net/cbbv?retryWrites=true&w=majority',
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      crypto.randomBytes(16, (err, buf) => {
        if (err) {
          return reject(err);
        }
        const filename = buf.toString('hex') + path.extname(file.originalname);
        const fileInfo = {
          filename: filename,
          bucketName: 'products'
        };
        resolve(fileInfo);
      });
    });
  }
});

const upload = multer({ storage });



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