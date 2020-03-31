const mongoose = require('mongoose');
const bcrypt = require('bcrypt');


let adminSchema = new mongoose.Schema({
    email: {
        type: 'string',
        required: 'enter a email'
    },
    password: {
        type: 'string',
        required: 'enter a password'
    }
},{
    timestamps:true
});


adminSchema.statics.hashPassword = async(password)=>{
    try{
        const salt = await bcrypt.genSalt(10)
        return bcrypt.hash(password, salt)
    }
    catch(e){
        console.log(e)
    }
}

adminSchema.methods.comparePassword = function(password){
    return bcrypt.compare(password, this.password)
}



module.exports = mongoose.model('Admin', adminSchema);




