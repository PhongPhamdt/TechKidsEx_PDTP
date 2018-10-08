const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const apiRouter = require('./routers/apiRouter');
const bcrypt = require('bcrypt-nodejs');
const session = require('express-session');

mongoose.connect('mongodb://localhost/tk-hotgirl', { useNewUrlParser: true }, (err) => {
	if(err) console.log(err);
	else console.log("DB connect Success !!!");
});

let app = express();

app.use(session({
  secret: 'roseislalala',
  resave: false,
  saveUninitialized: true,
  cookie: { 
  	httpOnly: false,
  	maxAge: 7*24*60*60*1000
  }
}));

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.get('/', (req,res) => {
	res.send("Techkids hotgirl app!");
});

app.use('/api', apiRouter);

app.listen(6969, (err) => {
	if(err) console.log(err);
	else console.log('Server is running at 6969');
});