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

};

module.exports = Calculations;
