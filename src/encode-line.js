const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let result = '';
  let counter = 1;
  
  for ( let i = 0; i < str.length-1; i++){
    if (str[i] !== str[i+1]){
      result += (counter === 1 ? '': counter) + str[i];
      counter = 0;
    }
    ++counter;

}

 return result + (counter === 1 ? '': counter) + (str.at(-1) || '');
}
module.exports = {
  encodeLine
};
