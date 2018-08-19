const fs=require('fs');

const obj={
	a: 10,
	b: 15
}

console.log('Start ')
fs.writeFile('./test.txt',JSON.stringify(obj),(err)=>{
	if(err) console.log(err);
	else console.log('Success');
});
// let fileData = fs.readFileSync('./test.txt');
fs.readFile('./test.txt',(err,fileData)=>{
	if(err) console.log(err);
	else console.log('file Data: '+JSON.parse(fileData).a);
})
// console.log("File Data: "+fileData);
console.log('End');
