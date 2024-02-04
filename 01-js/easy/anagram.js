/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  let s1=str1.toLowerCase().split('');
  let s2=str2.toLowerCase().split('');
  if(s1.length !== s2.length){
    return false;
  }
  for(let i =0; i<s1.length; i++){
    if(s2.includes(s1[i])){
      s2.splice(s2.indexOf(s1[i]),1);
    }
  }
  if(!s2.length){
    return true;
  }else{
    return false;
  }
}


module.exports = isAnagram;
