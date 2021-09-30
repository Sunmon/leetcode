/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let arr = [];
  let left = 0, right = 0;
  let ret = 0;
  while(right < s.length){
    console.log(right)
    let idx = arr.indexOf(s[right]);
    if (idx > -1){
      ret = Math.max(ret, arr.length)
      arr.splice(0,idx+1)
      arr.push(s[right])
      right++;
      left+= idx;
    } else {
      arr.push(s[right])
      right++;
    }
  }
  ret = Math.max(ret, arr.length)
  return ret;
};