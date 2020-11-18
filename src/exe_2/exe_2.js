const fetch = require('./fetch');
 
const maxRetry = 3;
const useIncrement = false;
const delay = 1000;
/**
 * Perfomrm a query to the specified URL
 * 
 * @param {string} url - url for performing the query
 */
const urlQuery = url => () => fetch(url)

/**
 * returns a promise that is resolved after the number of milliseconds specified in ms
 * 
 * @param {Number} ms - number of milliseconds for delay
 */
const delayFn = (ms) => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve();
  }, ms)
}); 
 

/**
 * perform query successfully once or try up to a maximum of maxRetry times
 * if unsuccessful, delay the next attempt for an amount of time. If attempts
 * continue to fail then increase the delay between attempts if useIncrements
 * is set to true. 
 *  
 * @param {function} queryFunction - function that performs the query
 * @param {Number} maxRetry - max number of retries
 * @param {Number} delay - number of milliseconds to wait between each retry
 * @param {Boolean} useIncrement - flag to specify if delay should be increased between attempts
 */
const queryRetry = async (queryFunction, maxRetry, delay, useIncrement ) => {
  
  let attempts = 0;

  while(attempts <= maxRetry ){
    attempts++;
    try{
      let response = await queryFunction();
      if(response.status !== 200) throw 'Something went wrong';
      return response;
    }catch(error){
      let time = useIncrement ?  delay*attempts : delay;
      if(attempts > maxRetry)
        throw error;
      await delayFn(time);
    }
  }

};

module.exports = {
  queryRetry,
  urlQuery
};