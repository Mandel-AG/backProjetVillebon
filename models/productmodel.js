const mongoose = require('mongoose');


let productSchema = new mongoose.Schema({
    name: {
        type: String
    },
    description : {
        type : String
    },
    picture: {
        type: String,
        required: 'picture required'
    }, 
    index: {
        type: Number
    }
},{
    timestamps:true
});

productSchema.pre('save', function(){
    return productSchema.countDocuments().exec().then((nb)=>{this.index = nb + 1})
})


module.exports = mongoose.model('Product', productSchema);




