/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    let answer = [1];
    let n = 0;
    while(n++ < rowIndex) {
        for(let i = n; i>0; i--) {
            answer[i] = answer[i-1] + (answer[i] ?? 0);
        }
    }
    return answer;
};