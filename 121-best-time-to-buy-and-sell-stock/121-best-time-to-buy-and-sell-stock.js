/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function (prices) {
  let answer = 0;
  let lowPrice = 987654321;
  for (let i = 0; i < prices.length; i++) {
    if (lowPrice <= prices[i]) continue;
    lowPrice = prices[i];
    for (let j = i + 1; j < prices.length; j++) {
      const profit = prices[j] - lowPrice;
      answer = Math.max(profit, answer);
    }
  }

  return answer;
};
