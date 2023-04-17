const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const answ = [];
  for (let i = 0; i < matrix.length; i++) {
    let rowCount = [];
    for (let j = 0; j < matrix[0].length; j++) {
      let counter = 0;
      for (let row = -1; row < 2; row++) {
        for (let col = -1; col < 2; col++) {
          if ( i + row >= 0 && i + row < matrix.length && j + col >= 0 && j + col < matrix[0].length && !(row === 0 && col === 0)) {
            counter += matrix[i + row][j + col] === true ? 1 : 0;
          }
        }
      }
      rowCount.push(counter);
    }
    answ.push([...rowCount]);
  }
  return answ;
}


module.exports = {
  minesweeper
};
