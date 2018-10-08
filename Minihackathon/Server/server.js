const express = require('express');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const GameModel = require('./models/gamemodel');

// const QuestionRouter = require('./routers/questionRouter');


let app = express();
app.listen(6969, (err) => {
    if (err) console.log(err);
    else {
        console.log('hihi, server is running!');
    }
});
app.use(cors());
app.use(bodyparser.urlencoded({
    extended: false
}));


mongoose.connect('mongodb://localhost/blahblah', (err) => {
    if (err) console.log(err)
    else console.log("DB connect success !");
});
let n1;
let n2;
let n3;
let n4;
let id;
app.get('/', (req, res) => {
    res.send("OKOK");
});
app.post('/player', (req, res) => {
    n1 = req.body.n1;
    n2 = req.body.n2;
    n3 = req.body.n3;
    n4 = req.body.n4;
    // req.body.1n
    const newGame = {
        name: [
            req.body.n1,
            req.body.n2,
            req.body.n3,
            req.body.n4
        ],
        round: [{}]
    };

    GameModel.create(newGame, (err, datacreated) => {
        if (err) console.log(err)
        else {
            id = datacreated._id;
            // res.send({mess: "Ask success!",question: questionCreated});    
            console.log("OKOK");
            res.redirect(`http://localhost:8080/playscreen?id=${id}`);
        }
    });

});
app.get('/newgame', (req, res) => {
    res.send({
        id: id,
        name1: n1,
        name2: n2,
        name3: n3,
        name4: n4
    });
});
app.get('/game/:id', (req, res) => {
    let id =req.params.id;
    GameModel.findById(id,(err,gameFound)=>{
        if(err) 
            console.log(err);
            if(!gameFound)
                res.send({mess:"Game not found.",game : null});
            else{
                res.send({mess:"succes found game.",game : gameFound});
            }
    });

});
app.put('/changeScore', (req, res) => {
    const {gameId,roundId,score1, score2,score3,score4} = req.body;
    let round;
    let checkExist = false;;
    GameModel.findById(gameId,(err,gameFound)=>{
        if(err) 
            console.log(err);
            if(!gameFound)
                res.send({mess:"Question not found.",game : null});
            else{
                
                round = gameFound.round;
                for(var i = 0;i < round.length ;i++){
                    if(round[i].roundId==roundId){
                        checkExist = true;
                        round[i].score1 = score1;
                        round[i].score2 = score2;
                        round[i].score3 = score3;
                        round[i].score4 = score4;
                    }
                }
                if(!checkExist){
                    round.push({ 
                        roundId: roundId,
                        score1: score1,
                        score2: score2,
                        score3: score3,
                        score4: score4
                     });
                }
                gameFound.round = round;
                gameFound.save((err,gameUpdated)=>{
                    if(err) console.log(err);
                    else{
                        res.send({mess : "success.",game : gameUpdated});
                    }
                });
            }

    });
    console.log(req.body);
   
});