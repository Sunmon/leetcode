/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
    intervals = intervals.sort((a,b) => a[1] < b[1] ? -1 : a[1] > b[1] ? 1 : a[0] - b[0]);
    let end = -Infinity;
    let count = 0;
    for(let i = 0; i<intervals.length; i++) {
        if (intervals[i][0] < end) {
            count++;
        } else {
            end = intervals[i][1];
        }
    }
    
    return count;
};