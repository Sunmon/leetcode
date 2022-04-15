/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function (prices) {
  let answer = 0;
  let minPrice = 987654321;
  for (let i = 0; i < prices.length; i++) {
    if (minPrice > prices[i]) {
      minPrice = prices[i];
    } else {
      answer = Math.max(answer, prices[i] - minPrice);
    }
  }
  return answer;
};
