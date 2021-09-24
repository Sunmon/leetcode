/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
  var result = Array(nums.length).fill(-1);
  var len = 0;
  nums.forEach(num => {
    const sqrt = num * num;
    result[len] = sqrt;
    let target = len-1;
    const origin = result[len];
    while(target >= 0) {
      if (result[target] > origin) {
        result[target+1] = result[target]; 
        target --;
        continue;
      } 
      break;
    }
    result[target+1] = origin;
    len +=1;
  })
  
  return result;
};