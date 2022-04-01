/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function (prices) {
  let minPriceFar = 987654321;
  let profit = 0;
  for (let i = 0; i < prices.length; i++) {
    if (minPriceFar > prices[i]) {
      minPriceFar = prices[i];
    }
    profit = Math.max(profit, prices[i] - minPriceFar);
  }
  return profit;
};
