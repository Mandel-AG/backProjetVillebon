const mongoose = require('mongoose');

let postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: 'you must enter a title'
    },
    description: {
        type: String
    },
    typePost: {
        type: String,
        require: "enter a typePost (actus, club ou equipe)"
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
