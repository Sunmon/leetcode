/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  return s.split(' ').map(el => {
    const len = el.length-1;
    const arr = el.split('')
    for(let i = 0; i<el.length / 2; i++) {
      [arr[i],arr[len-i]] = [arr[len-i], arr[i]]
    }
    return arr.join('');
  }).join(' ')
};