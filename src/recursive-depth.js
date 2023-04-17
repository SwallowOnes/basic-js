const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {

  calculateDepth(arr) {
    let deepCount = 0;
    for (let item of arr){
      if (Array.isArray(item)){
        deepCount = Math.max(deepCount, this.calculateDepth(item));
      }
    }
    deepCount++;
    return deepCount;
  //   if(Array.isArray(arr)){
  //     arr.forEach(elem => {
  //       deepCount = Math.max(deepCount, this.calculateDepth(elem));
  //     });
  //     deepCount++;
  //     }
  //   return deepCount;

 }

}

module.exports = {
  DepthCalculator
};
