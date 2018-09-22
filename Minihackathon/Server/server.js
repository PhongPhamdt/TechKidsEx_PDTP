const express = require('express');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const GameModel = require('./models/gamemodel');

// const QuestionRouter = require('./routers/questionRouter');


let app = express();
app.listen(8080, (err) => {
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
app.post('/player', (req, res) => {
    // req.body.1n
    const newGame = {
        name: [
            req.body.n1,
            req.body.n2,
            req.body.n3,
            req.body.n4
        ],
        round:[{}]
    };

    GameModel.create(newGame, (err, gameCreated) => {
        if (err) console.log(err);
        else {
            res.redirect(`http://localhost:8081/${gameCreated._id}`);
        
            
        }
    })
    res.send('hihi');
});