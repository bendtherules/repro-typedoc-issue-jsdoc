// @ts-check

const Calculations = {

  /**
   * @description Get minimum SIP amount
   * @returns {number} - Returns here
   * @param {Array<number>} priceArray - Input here
   */
  getMaxAmount(priceArray) {
    const maxPrice = Math.max(...priceArray);
    return maxPrice;
  },

  /**
   * Get total value of the order from order config
   * @returns {number} - Output A
   * @param {import('./types').OrderConfig} orderConfig - Input A
   * @param {import('./types').SidPriceMap} sidPriceMap - Input B
   */
  calculateOrderTotalValue: function calculateOrderTotalValue(orderConfig, sidPriceMap) {
    const totalValue = orderConfig.reduce((prevValue, eachSidConfig) => {
      const sidPrice = sidPriceMap[eachSidConfig.sid];
      const currentConfigValue = sidPrice * eachSidConfig.shares;
      return (prevValue + currentConfigValue);
    }, 0);

    return totalValue;
  }
};

module.exports = Calculations;
