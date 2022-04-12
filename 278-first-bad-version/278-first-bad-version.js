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
const solution = function (isBadVersion) {
  // let minBad = Number.MAX_SAFE_INTEGER;

  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let [begin, end] = [1, n];
    while (begin < end) {
			const middle = parseInt((begin + end) / 2);
      if (isBadVersion(middle) === true) {
        end = middle;
      } else {
        begin = middle + 1;
      }
    }
    return begin;
  };
}; 