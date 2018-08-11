'use strict'

// function generate(testLengthArray){
//   return Array.from({length : testLengthArray.length})
//     .map(item => ({
//       input: Array.from({length: item}).map(item => []),
//       target: 0,
//       output: -1
//     })
//   ); // Remove this line and change to your own algorithm
// }
// function getRandomInt(a, b) {
//   return Math.floor(Math.random() * (b - a)) + a;
// }

// function generate(testLengthArray) {
//   var list = new Array;
//   var count = 0;
//   while (count < testLengthArray.length) {
//     var input = new Array;
//     while (input.length < testLengthArray[count]) {
//       input.push(getRandomInt(-10000, 10000));
//     }
//     input = bubbleSort(input);
//     var target = generateTarget(input);
//     var output = search(input, target);
//     list.push({ "input": input, "target": target, "output": output });
//     console.log("input: [" + input +"]\n"+ "target: " + target +"\n"+ "output: " + output+"\n");
//     count++;
//   }
//   // console.log(testLengthArray.length);
//   return list;
// }

// function generateTarget(input) {
//   if(input.length==1)
//   	return input[0];
//   else return input[getRandomInt(0,input.length-1)];
// }

function search(input, target) {
  for (var i = 0; i < input.length; i++) {
    if (input[i] == target) {
      return i;
    }
  }
  return -1;
}

function bubbleSort(array){
 for(let i = 0; i < array.length - 1; i++){
   for(let j = array.length - 1; j > i; j--){
     if((array[j] - array[j-1])<0){
       let t = array[j];
       array[j] = array[j - 1];
       array[j - 1] = t;
     }
   }
 }
 return array;
}

function sort(input) {
  // return input.sort((a,b) => a-b); // Remove this line and change to your own algorithm
  return bubbleSort(input);
}
function generate(testLengthArray){
  return Array.from({length : testLengthArray.length})
    .map(item => ({
      input: Array.from({length: item}).map(item => []),
      target: 0,
      output: -1
    })
  ); // Remove this line and change to your own algorithm
}

module.exports = generate
