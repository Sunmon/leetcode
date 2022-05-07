/**
 * @param {string} s
 * @return {string[]}
 */

let result = [];
const letterCasePermutation = function (s) {
  result = [];
  change([...s], 0);
  return result;
};

const change = function (arr, k) {
  if (k === arr.length) {
    result.push(arr.join(''));
    return;
  }
  if (Number.isNaN(+arr[k])) {
    arr[k] = arr[k].toLowerCase();
    change(arr, k + 1);
    arr[k] = arr[k].toUpperCase();
    change(arr, k + 1);
    return;
  }

  change(arr, k + 1);
};
