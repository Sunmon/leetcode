/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
const merge = function (intervals) {
  intervals = intervals.sort((a, b) => a[0] - b[0]);
  const result = [];
  let i = 0;
  while (i < intervals.length) {
    let [min, max] = [intervals[i][0], intervals[i][1]];
    let j = i;
    while (j < intervals.length && intervals[j][0] <= max) {
      max = Math.max(intervals[j][1], max);
      j++;
    }
    result.push([min, max]);
    i = j;
  }
  return result;
};
