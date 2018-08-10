//const
//let
//var 

/*function dmm(dmm){
	console.log(dmm);
}

dmm(5);

const dm=function(dm){
	console.log(dm);
}

dm("dm");*/

// var a=6;

/*function print(){
	var b = 10;
	console.log(a);
	console.log(b);
}*/
// print();
// console.log(a);
// console.log(global.b);


// function count(num){
// 	for(let i=num;i>=0;--i){
// 		// console.log(i);
// 		setTimeout(function (){
// 			console.log(i);
// 		},1000*(num-i));
// 	}
// }

// var a=count;

// count(5);
// a(5);

function printA(callback){
	setTimeout(function(){console.log("A");
	callback();},1000);
}
function callback(){
	console.log("B");
}

printA(callback);
// printB();