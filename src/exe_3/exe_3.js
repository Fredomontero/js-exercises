const fetchMock = require('../mocks/fetch');

/**
 * Perfomrm a query to the specified URL and provides a method for cancelling the fetch
 * 
 * @param {string} url - url for performing the query
 */
const cancellableFetch = url => {
  let cancelFetch;

  const fetch = new Promise((resolve, reject) => {
    cancelFetch = reject;
    fetchMock(url)
    .then(response => resolve(response))
    .catch(error => reject(error))
  });

  fetch.cancel = () => {
    cancelFetch("Operation cancelled");
  };

  return fetch;
};

module.exports = cancellableFetch;

// const result = cancellableFetch("https://example.com");
// result.cancel();
// result.then(response => console.log("Response: ", response))
// .catch(error => console.log("Error: ", error))