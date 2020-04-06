const secret = 'ae277e0f-8f8d-4cb2-937a-e5a81f95194e';
const jwt = require('jsonwebtoken');
const { findAdminPerId } = require('../queries/admin.queries');;
const { app } =  require('../server');


const createToken = (user)=>{
    const token = jwt.sign({ sub: user._id.toString() }, secret, { expiresIn: '15d' })
    return token;
}


exports.createToken = createToken;

const extractUserFromToken = async(req, res, next) =>{
    const token = req.cookies.jwt
    if (token){
        try{
            const decodedToken = jwt.verify(token,secret);
            const user = await findAdminPerId(decodedToken.sub);
            if (user){
                req.user = user;
                next();
            }else{
                res.clearCookie('jwt')
                res.redirect('/')

            }
        }
        catch(err){
            res.clearCookie('jwt')
            res.redirect('/')
        }

    }else{
        next();
    }
}


const addJwtFeature = (req, res, next) =>{
    req.isAuthenticated = () => !!req.user
    req.logout = () =>{ res.clearCookie('jwt')}
    req.login = (user) =>{
        const token = createToken(user);
        res.cookie('jwt', token)
    }
    next();
}





app.use(extractUserFromToken);
app.use(addJwtFeature);