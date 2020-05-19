const mongoose = require('mongoose');


let scoreSchema = new mongoose.Schema({
    homeTeamScore: {
        type: Number,
        required: 'Enter a score Villebon'
    },
    opponentScore : {
        type : Number,
        required : 'Enter a score opponent'
    },
    homeTeam: {
        type: String,
        required: 'enter Villebon'
    }, 
    opponent: {
        type: String,
        required: 'enter a team'
    },
    result : {
        type : String,
        required : 'Enter the result'
    }
},{
    timestamps:true
});


module.exports = mongoose.model('Score', scoreSchema);




