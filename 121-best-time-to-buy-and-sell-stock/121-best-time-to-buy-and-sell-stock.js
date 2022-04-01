/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function (prices) {
  return getMaxProfit(prices);
};

const getMaxProfit = function (prices) {
  if (prices.length <= 1) return 0;
  const mid = parseInt(prices.length / 2);
  const left = prices.slice(0, mid);
  const right = prices.slice(mid);
  const leftMax = getMaxProfit(left);
  const rightMax = getMaxProfit(right);
  const current = Math.max(...right) - Math.min(...left);
  return Math.max(leftMax, rightMax, current);
};
