/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let rows = [-1,-1];
    let cols = [-1,-1];
    const m = matrix.length;
    const n = matrix[0].length;
    for(let i = 0; i<m; i++) {
        if (matrix[i][0] <= target && matrix[i][n-1] >= target) {
            if (rows[0] === -1) {
                rows[0] = i;
            } 
            rows[1] = i;
        }
        
    }
    
    for(let i = 0; i<n; i++) {
        if (matrix[0][i] <= target && matrix[m-1][i] >= target) {
            if (cols[0] === -1) cols[0] = i;
            cols[1] = i;
        }
    }
    
    if (cols[0] === -1 || rows[0] === -1) return false;
    for(let i = rows[0]; i <= rows[1]; i++) {
        for(let j = cols[0]; j <= cols[1]; j++) {
            if (matrix[i][j] === target) return true;
        }
    }
    
    return false;
};