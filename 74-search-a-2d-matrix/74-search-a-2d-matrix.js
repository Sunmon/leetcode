/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}

 */
const searchMatrix = function (matrix, target) {
  const row = binaryRowSearch(matrix, target, 0, matrix.length);
  const col = binaryColSearch(matrix[row], target, 0, matrix[row].length);
  return matrix[row][col] === target;
};

// [begin, end) 탐색
const binaryRowSearch = function (matrix, target, begin, end) {
  if (begin >= end - 1) return begin;
  const mid = parseInt((begin + end) / 2);
  if (matrix[mid][0] < target) return binaryRowSearch(matrix, target, mid, end);
  if (matrix[mid][0] > target)
    return binaryRowSearch(matrix, target, begin, mid);
  return mid;
};

const binaryColSearch = function (matrix, target, begin, end) {
  if (begin >= end - 1) return begin;
  const mid = parseInt((begin + end) / 2);
  if (matrix[mid] < target)
    return binaryColSearch(matrix, target, mid + 1, end);
  if (matrix[mid] > target) return binaryColSearch(matrix, target, begin, mid);
  return mid;
};
