const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const QuestionModel = require('./models/questionModel');
const QuestionRouter = require('./router/questionRouter');

mongoose.connect('mongodb://localhost/App', (err) => {
	if(err) console.log(err);
	else console.log("DB connect Success !!!");
});

let app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
	res.send("Hello world");
});

app.post('/ask', (req, res) => {
	const newQuestion = {
		content: req.body.question
	}
	QuestionModel.create(newQuestion, (err, questionCreated) => {
		if(err) console.log(err);
		else res.redirect('http://localhost:8080/');
	});
});

app.use('/question', QuestionRouter);

app.put('/answer', (req, res) => {
	const {answer, questionId} = req.body;
	QuestionModel.findById(questionId, (err, questionFound) => {
		if(err) console.log(err);
		if(!questionFound) res.send({ message: 'Not Found', question: null});
		else{
			questionFound[answer]++;
			questionFound.save((err, questionFound) => {
				if(err) console.log(err);
				else res.send({message:"Success", question: questionFound});
			});
		}
	});
});

app.listen(6969, (err) => {
	if(err) console.log(err);
	else console.log("Server is listening at port 6969!");
});