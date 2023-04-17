const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  linkMaker : [],
  getLength() {
    return this.linkMaker.length;
  },
  addLink(value) {
    this.linkMaker.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (
      !Number.isInteger(position)||
      position > this.linkMaker.length ||
      position < 1
    ){
      this.linkMaker = [];
      throw new Error ("You can't remove incorrect link!")
    }
    if(this.linkMaker){
      this.linkMaker.splice( position-1, 1);
      return this;
    }
  },
  reverseChain() {
    this.linkMaker = this.linkMaker.reverse();
    return this;
  },
  finishChain() {
    let result = this.linkMaker.join('~~');
    this.linkMaker = [];
    return result;
  }
};

module.exports = {
  chainMaker
};
