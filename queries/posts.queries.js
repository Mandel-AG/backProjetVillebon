const Post = require('../models/postmodel')



exports.getPostsQuery = () =>{
    return Post.find({}).exec()
}


exports.getFilteredPost = (type) =>{
    return Post.find({typePost:type }).exec()
}


exports.searchPostQuery = (query) =>{
    return Post.find({title: new RegExp(query, 'i')}).exec()
}


exports.createPostQuery = (post) =>{
    return post.save()
}

exports.deletePostsQuery = () =>{
    return Post.deleteMany({}).exec()
}


exports.deletePostQuery = (postId) =>{
    return Post.findByIdAndDelete(postId).exec()
}


exports.updatePostQuery = (postId, newpost) =>{
    return Post.findByIdAndUpdate(postId, 
        {$set: newpost}, {runValidators:true}).exec()
}
