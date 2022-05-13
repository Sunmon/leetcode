/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
const addStrings = function (num1, num2) {
  let i = num1.length - 1;
  let j = num2.length - 1;
  const result = [];
  let add = 0;
  while (i >= 0 && j >= 0) {
    const cur = +num1[i--] + +num2[j--];
    result.push((cur + add) % 10);
    cur + add >= 10 ? (add = 1) : (add = 0);
  }

  while (i >= 0) {
    const cur = +num1[i--];
    result.push((cur + add) % 10);
    cur + add >= 10 ? (add = 1) : (add = 0);
  }

  while (j >= 0) {
    const cur = +num2[j--];
    result.push((cur + add) % 10);
    cur + add >= 10 ? (add = 1) : (add = 0);
  }
    if(add > 0) result.push(1);

  return result.reverse().join('');
};