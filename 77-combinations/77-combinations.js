/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
let answer = [];
const combine = function (n, k) {
    answer = [];
  select(1, n, k - 1, []);
  return answer;
};

const select = function (i, n, k, arr) {
  if (i > n) return;
  if (k === 0) {
    arr.push(i);
    answer.push([...arr]);
    arr.pop();
  }
  select(i + 1, n, k, arr);
  arr.push(i);
  select(i + 1, n, k - 1, arr);
  arr.pop();
};