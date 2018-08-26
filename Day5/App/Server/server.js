const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

let app = express();

app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (req,res) => {
	res.send("Hello World");
});

app.post('/ask', (req,res) => {
	// console.log("FBI WARNING!");
// 	req.on('data', (data) => {
// 		console.log(data);
// 	})
	console.log("Question :", req.body.question);
	fs.readFile('./questions.txt', (err,fileData) => {
		if(err) console.log(err);
		else{
			try{
				console.log("File Data: " + fileData);
				let questions = [];
				if(fileData != "" && JSON.parse(fileData).length)
					questions = JSON.parse(fileData);

				// let questions = fileData;
				const newQuestion = {question: req.body.question};
				questions.push(newQuestion);
				fs.writeFile('./questions.txt', JSON.stringify(questions), (err) => {
					if(err) console.log(err);
					else res.redirect('http://localhost:6969/');
				});
			}catch(error){
				console.log("error: ",error);
			}
		}
	});
});

app.listen(6969, (err) => {
	if(err) console.log(err);
	else console.log("Server is listening at port 6969!");
});