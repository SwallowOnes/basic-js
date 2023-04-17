const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  str = String(str);
  megaSTR = [];
  answ = [];
  const repeatTimes = 'repeatTimes' in options ? options.repeatTimes : 1;
  const separator = 'separator' in options ? options.separator : '+';
  const addition = 'addition' in options ? String(options.addition) : '';
  const additionRepeatTimes = 'additionRepeatTimes' in options ? options.additionRepeatTimes : 1;
  const additionSeparator = 'additionSeparator' in options ? options.additionSeparator : '|';

  for ( let i = 0; i < additionRepeatTimes; i++ ){
    megaSTR.push(addition);
  }
  megaSTR = megaSTR.join(additionSeparator);

  for ( let i = 0; i < repeatTimes; i++ ){
    answ.push(str+megaSTR);
  }
  return answ.join(separator);

}

module.exports = {
  repeater
};
