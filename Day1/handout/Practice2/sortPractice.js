'use strict'

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

module.exports = sort
