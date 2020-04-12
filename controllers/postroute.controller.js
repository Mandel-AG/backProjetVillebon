const Post = require('../models/postmodel');
const Media = require('../models/mediamodel');
const{getPostsQuery, updatePostQuery, getFilteredPost, searchPostQuery, createPostQuery, deletePostsQuery, deletePostQuery } = require('../queries/posts.queries')


exports.getPost = async (req,res) => {
    try{
        const posts = await getPostsQuery();
        const filtre = 'Tous'
        console.log(posts)
        res.json(posts)
        // res.render('posts',{posts, filtre:filtre });
        // res.render('posts',{posts, filtre:filtre || {})
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
    try{
        let post = new Post({
            title:req.body.title,
            description:req.body.description,
            typePost:req.body.typePost,
            file: req.file.filename,
            unique:true
        })
        const media = new Media ({
            name : req.body.title,
            equipe : 'aucune',
            file : req.file.filename,
            post : post._id 
        })
        await media.save()
        console.log(media)
        console.log(post, 'post')
        console.log(post.file, 'req')


       const newpost = await createPostQuery(post)
       res.redirect('/posts/add');
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
        console.log(e);
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
        res.render('partials/post-list', {posts, filtre: null })
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