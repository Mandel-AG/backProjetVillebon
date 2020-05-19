const mongoose = require('mongoose');

let mediaSchema = new mongoose.Schema({
    name: {
        type: String,
        required: 'you must enter a name'
    },
    mediaType: {
        type: String,
        required: 'enter a type'
    },
    team: {
        type: String,
    },
    description : {
        type : String
    },
    picture: {
        type: String,
        required:'select a picture'
    },
    postId: {
        type:String,
        ref: 'Post'
    },
    index : {
        type : Number
    }

},{
    timestamps:true
});


mediaSchema.pre('save', function(){
    return Media.countDocuments().exec().then((nb)=>{this.index = nb + 1})
})

module.exports = mongoose.model('Media', mediaSchema);