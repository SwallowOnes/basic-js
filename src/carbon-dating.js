const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivit) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if (arguments.length === 0) return false;
  if (typeof sampleActivit !== 'string') return false;
  if (sampleActivit <= 0 || sampleActivit >= MODERN_ACTIVITY) return false;
  let sampleActivitparse = parseFloat(sampleActivit);
  if (isNaN(sampleActivitparse)) return false;
  let period = 0.693 / HALF_LIFE_PERIOD;
  let times = Math.log(MODERN_ACTIVITY/ sampleActivitparse) / period;
  return Math.ceil(times);
}

module.exports = {
  dateSample
};
