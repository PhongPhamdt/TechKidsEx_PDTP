const express = require('express');
const path = require('path');

let app = express();

// app.get('/', (req,res) => {
// 	console.log(__dirname);
// 	res.sendFile(path.resolve(__dirname,'../../Day2/FE-CSS/index.html'));
// });
// var a;

app.get('/:a' ,(req,res) => {
	var a = req.params.a;
	res.send('Hello '+ a);
})

app.get('/' ,(req,res) => {
	res.send('Hello '+ req.query.name);
})
// app.use(express.static('../../Day2/FE-CSS'));

app.listen(8080, (err) => {
	if(err) console.log(err);
	else console.log("Server is running at port 8080");
});