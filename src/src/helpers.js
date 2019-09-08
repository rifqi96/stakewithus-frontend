import Vue from 'vue';

const helpers = {
  methods: {
    /**
     * Format number to thousands separated
     * @param {Number} amount 
     * @param {Number} decimalCount 
     * @param {String} decimal 
     * @param {String} thousands 
     * @returns {String} Formatted num
     */
    formatNum(amount, decimalCount = 2, decimal = ".", thousands = ",") {
      try {
        decimalCount = Math.abs(decimalCount);
        decimalCount = isNaN(decimalCount) ? 2 : decimalCount;
    
        const negativeSign = amount < 0 ? "-" : "";
    
        let i = parseInt(amount = Math.abs(Number(amount) || 0).toFixed(decimalCount)).toString();
        let j = (i.length > 3) ? i.length % 3 : 0;
    
        return negativeSign + (j ? i.substr(0, j) + thousands : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) + (decimalCount ? decimal + Math.abs(amount - i).toFixed(decimalCount).slice(2) : "");
      } catch (e) {
        // eslint-disable-next-line no-console
        console.log(e);
      }
    },
    /**
     * Sort array by key
     * @param {Array} arr 
     * @param {String} keyName 
     * @param {String} sort ASC | DESC
     * @param {CallableFunction} formatAKey 
     * @param {CallableFunction} formatBKey 
     * @returns {Array} Sorted array
     */
    sortArrayByKey(arr, keyName = 'id', sort = 'ASC', formatAKey = null, formatBKey = null) {
      return arr.sort((a, b) => {
        let aKey = a[keyName];
        let bKey = b[keyName];
        
        // If formatAKey callback is set
        if (formatAKey && typeof formatAKey === 'function')
          aKey = formatAKey(aKey);
      
        // If formatBKey callback is set
        if (formatBKey && typeof formatBKey === 'function')
          bKey = formatBKey(bKey);

        // Compare in ASC order
        if (sort === 'ASC') 
          return aKey - bKey;

        // Compare in DESC order
        if(aKey > bKey) return -1;
        if(aKey < bKey) return 1;
        return 0;
      });
    },
    /**
     * Uppercase the first letter of a string
     * @param {String} str 
     * @returns {String} First letter uppercased
     */
    toUpperCaseFirstLetter(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    },
  },
};

Vue.mixin(helpers);

export default helpers;