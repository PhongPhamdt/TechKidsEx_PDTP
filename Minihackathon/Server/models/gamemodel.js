const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GameSchema = new mongoose.Schema({
    // id:Number,
   
    // name: {type : Array  ,require:true},      // require : true (set rang buoc : phai co)
    name: [String],
    round: [{ 
        roundId: Number,
        score1: Number,
        score2: Number,
        score3: Number,
        score4: Number
     }],
//    Array={1,3,4,5,2},{2,,,4,5,6},{3,3,2,1,2};
}, {

    timestamps: true
});

module.exports = mongoose.model('games', GameSchema);
