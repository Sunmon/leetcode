/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function (s) {
  const stack = [];
  let p = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
      stack.push(s[i]);
      p++;
    } else if (p < 0) {
      return false;
    } else if (s[i] === ')' && stack[p - 1] === '(') {
      stack.pop();
      p--;
    } else if (s[i] === '}' && stack[p - 1] === '{') {
      stack.pop();
      p--;
    } else if (s[i] === ']' && stack[p - 1] === '[') {
      stack.pop();
      p--;
    } else {
      return false;
    }
  }

  return stack.length === 0;
};
