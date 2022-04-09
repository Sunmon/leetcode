/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function (s) {
  const stack = [];
  let counter = -1;
  for (const i of s) {
    if (i === '(' || i === '{' || i === '[') {
      stack.push(i);
      ++counter;
    } else if (
      (i === ')' && stack[counter] === '(') ||
      (i === '}' && stack[counter] === '{') ||
      (i === ']' && stack[counter] === '[')
    ) {
      stack.pop();
      --counter;
    } else {
      return false;
    }
  }
  return counter === -1;
};
