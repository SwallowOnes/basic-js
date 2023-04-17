const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let str = n.toString();
  let answer = 0;
  for ( let i =0; i< str.length; i++){
    let num = parseInt(str.slice(0,i) + str.slice(i+1));
    answer = Math.max(num, answer);
  }
  return answer;
}

module.exports = {
  deleteDigit
};
