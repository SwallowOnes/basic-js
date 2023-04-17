const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if ( typeof s1 !== 'string') return false;
  if ( typeof s2 !== 'string') return false;
  let s1string = s1.split('');
  let s2string = s2.split('');
  let answ = [];

  for (let i = 0; i<s1string.length; i++){
    if (s2string.includes(s1string[i])){
      answ.push(s1string[i]);
      delete s2string[s2string.indexOf(s1string[i])]
    }
  }
  return answ.length;
}

module.exports = {
  getCommonCharacterCount
};
