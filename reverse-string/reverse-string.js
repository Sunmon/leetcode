/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
  const len = s.length-1; 
  for (let i = 0; i<s.length/2; i++){
      const temp = s[i];
      s[i] = s[len-i];
      s[len-i] = temp;
  }
};