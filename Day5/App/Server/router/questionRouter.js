const express = require('express');
const QuestionRouter = express.Router();

const QuestionModel = require('../models/questionModel');

// QuestionRouter.use((req, res, next) => {
// 	console.log('Hello Middleware');
// 	next();
// });

QuestionRouter.get('/', (req, res) => {
	QuestionModel.find({ }, (err, questions) => {
		let randomNum = Math.floor(Math.random()*questions.length);
		QuestionModel
		.findOne({ })
		.skip(randomNum)
		.exec((err, questions) => {
			if(err) console.log(err);
			else res.send({ message:"Success", question: questions});
		});	
	});
});

QuestionRouter.get('/:questionId', (req,res) => {
	QuestionModel.findById(req.params.questionId, function(err, result) {
		if(err) console.log(err);
		else res.send({message:"Success", question: result});
	})
});

module.exports = QuestionRouter;