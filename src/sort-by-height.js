const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let counter = 0;
  let fillArr = arr.filter((a) => a !==-1);
  let sortArr = fillArr.sort((a,b)=> a-b);
  return [...arr].map((el, index) => {
      if (el !== -1){
        counter++;
        return sortArr[counter-1];
      }
      return el;
  })

}

module.exports = {
  sortByHeight
};
