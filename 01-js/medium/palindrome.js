/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  const original=str.toLowerCase().split("");
  let check=false;
  let duplicate=[];

  for(let i=0;i<original.length;i++){
    str=original[i]
    if(str=='?'|| str=='!'|| str==','|| str=='.'|| str==" "){
      original.splice(i,1)
      i--
    }
  }
  for (let i=original.length;i>0;i--){
    duplicate[original.length-i]=original[i-1]
  }
  if(duplicate.join("")==original.join("")){
    check=true;
  }
  return check;
}

module.exports = isPalindrome;
