'use strict'

function search(input, target) {
  // return  input.indexOf(target);  // Remove this line and change to your own algorithm
  for(var i=0;i<input.length;i++)
  {
  	if(input[i]==target)
  	{
  		return i;
  		//break;
  	}
  	//else return -1;
  }
  return -1;
}

module.exports = search
