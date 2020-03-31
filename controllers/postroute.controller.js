const Post = require('../models/postmodel')
const{getPostsQuery, updatePostQuery, getFilteredPost, searchPostQuery, createPostQuery, deletePostsQuery, deletePostQuery } = require('../queries/posts.queries')




exports.getPost = async (req,res) => {
    try{
        const posts = await getPostsQuery();
        const filtre = 'Tous'
        console.log(filtre)
        res.render('posts',{posts, filtre:filtre || {}})
    }
    catch(e){
        console.log(e)
    }
}



exports.filteredPosts = async(req,res)=>{
    try{
        let filtre = req.params.type
        console.log(filtre, 'filtre')
        const posts = await getFilteredPost(filtre)
        res.render('posts', {posts, filtre:filtre})
    }
    catch(e){
        console.log(e)
    }
}



exports.createPost = async (req,res)=>{
    let post = new Post({
        title:req.body.title,
        description:req.body.description,
        typePost:req.body.typePost,
        media:'cheminimage',
        unique:true
    })
    try{
       const newpost = await createPostQuery(post)
       res.redirect('/posts/add') 
    }
    catch(e){
       console.log(e) 
    }
}


exports.updatePost = async(req,res) =>{
    try{
    const newpost = req.body;
    const postid = req.params.id;
        await updatePostQuery(postid, newpost)
        res.redirect('/posts');
    }
    catch(e){
        console.log(e)
    }
}


// Delete plusieurs Posts
exports.deleteManyPosts = async (req,res) =>{
    try{
        const post = await deletePostsQuery()
        res.send(post);
    }
    catch(e){
        console.log(e)
    }
}



// Delete 1 Post
exports. deletePost = async (req,res)=>{
    try{
        const postId = req.params.id
        await deletePostQuery(postId)
        const posts = await getPostsQuery()
        res.render('partials/post-list', {posts})
    }
    catch(e){
        console.log(e)
    }
}

exports.postSearch = async(req,res)=>{
    try{
        const postQuery = req.query.reqt
        const posts = await searchPostQuery(postQuery)
        const filtre = posts.typePost
        res.render('partials/post-list', {posts, filtre} )
    }
    catch(e){
        console.log(e)
    }
}