const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const cors = require('cors');

let app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send("Hello world");
});

app.post('/ask', (req, res) => {
  fs.readFile('./questions.txt', (err, fileData) => {
    if(err) console.log(err)
    else {
      try {
        let questions = [];
        if(fileData.length > 0 && JSON.parse(fileData).length) {
          questions = JSON.parse(fileData);
        }
        const newQuestion = {
          id: questions.length + 1,
          questionContent: req.body.question,
          yes: 0,
          no: 0
        }
        questions.push(newQuestion);
        fs.writeFile('./questions.txt', JSON.stringify(questions), (err) => {
          if(err) console.log(err)
          else res.redirect('http://localhost:8080/');
        });
      } catch (error) {
        console.log("Error: ", error);
      }
    }
  });
});

app.get('/question', (req, res) => {
  fs.readFile('./questions.txt', (err, fileData) => {
    if(err) console.log(err);
    else {
      try {
        let questions = JSON.parse(fileData);
        let randomNum = Math.floor(Math.random()*questions.length);
        let randomQuestion = questions[randomNum];
        res.send({ message: "Success!", question: randomQuestion });
      } catch (error) {
        console.log("Error!!! ", error);
      }
    }
  });
});

app.put('/answer', (req, res) => {
  console.log(req.body);
  const { answer, questionId } = req.body;
  fs.readFile('./questions.txt', (err, fileData) => {
  	if(err) console.log(err);
  	else{
  		try{
  			let questions = [];
            if (fileData.length && JSON.parse(fileData).length) {
            	questions = JSON.parse(fileData);
            }
                
            // if(question.answer=='yes'){
            //     questions[questionId-1].yes++;
            // }else{
            //     questions[questionId-1].no++;
            // }
            questions[questionId-1][answer]++;
                
            fs.writeFile('./questions.txt', JSON.stringify(questions), (err) => {
                if (err) console.log(err)
                else res.send({ message: "Success", questionId });
            });
  		} catch (error) {
  			console.log("Error!!! ", error);
  		}
  	}
  });
});

app.listen(6969, (err) => {
  if(err) console.log(err)
  else console.log("Server is listening at port 6969!");
});