/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
    const s=str.toLowerCase().split("");
    let allvowels={a:0,e:0,i:0,o:0,u:0}
    let countallvowels=0
    s.map((str)=>{
      if(str=='a'||str=='e'||str=='i'||str=='o'||str=='u'){
        allvowels[str]+=1
        countallvowels+=1
      }
    })
    return countallvowels
}


module.exports = countVowels;