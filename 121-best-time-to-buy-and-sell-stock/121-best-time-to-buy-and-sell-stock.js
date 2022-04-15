/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function (prices) {
  let answer = 0;
  const len = prices.length;
  const lowestPrices = Array(len);
  const highestPrices = Array(len);
  let low = 987654321;
  let high = -987654321;
  for (let i = 0; i < len; i++) {
    if (low > prices[i]) low = prices[i];
    if (high < prices[len - i - 1]) high = prices[len - i - 1];
    lowestPrices[i] = low;
    highestPrices[len - i - 1] = high;
  }

  for (let i = 0; i < len; i++) {
    answer = Math.max(answer, highestPrices[i] - lowestPrices[i]);
  }

  return answer;
};
