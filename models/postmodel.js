const mongoose = require('mongoose');

let postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: 'you must enter a title'
    },
    content: {
        type: String
    },
    postType: {
        type: String,
        require: "enter a typePost (actus, club, equipe ou boutique)"
    },
    picture: {
        type: String,
        ref: 'media'
    },
    index : {
        type : Number,
    }

},{
    timestamps:true
});


postSchema.pre('save', function(){
    return Post.countDocuments().exec().then((nb)=>{this.index = nb + 1})
})

module.exports = mongoose.model('Post', postSchema);
