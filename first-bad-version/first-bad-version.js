/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let begin = 1, end = n;
        let ret = Infinity;
        while(begin <= end) {
            const mid = Math.floor((begin+end)/2)
            if (isBadVersion(mid)) {
                ret > mid ? ret = mid: '';
                end = mid-1;
            } else {
                begin = mid+1;
            }
        }
        
        return ret;
        
    };
};