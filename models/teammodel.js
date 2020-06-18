const mongoose = require('mongoose');

let teamSchema = new mongoose.Schema({
    name: {
        type: String,
        required: 'you must enter a name'
    },
    memberList : {
      type : String
  },
    schedule: {
        type: String
    },
    price: {
      type: String
  },
    picture: {
        type: String,
    },
    games:[{
        type:String
    }],
    index : {
        type : Number,
    }
},{
    timestamps:true
});

teamSchema.pre('save', function(){
    return teamSchema.countDocuments().exec().then((nb)=>{this.index = nb + 1})
})

module.exports = mongoose.model('Team', teamSchema);