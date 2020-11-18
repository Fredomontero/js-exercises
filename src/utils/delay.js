/**
 * returns a promise that is resolved after the number of milliseconds specified in ms
 * 
 * @param {Number} ms - number of milliseconds for delay
 */
const delay = (ms) => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve();
  }, ms)
}); 

module.exports = delay;