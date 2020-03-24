const mongoose = require('mongoose');

let postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: 'you must enter a firstname'
    },
    description: {
        type: String,
        required: 'enter a email'
    },
    typePost: {
        type: String,
        require: "Entrez equipe ou annonce"
    },
    media: {
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

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
