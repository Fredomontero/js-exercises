/**
 * Function that returns the direct parent elements that matches the elements that match with the selector
 * 
 * @param {String} selector - selector string to perform the query
 */
const querySelectorAll = (selector) => {
  let [parentSelector, childSelector] = selector.split("<");
  const matches = document.querySelectorAll(parentSelector + " " + childSelector);
  let elements = Object.entries(matches).map(([key, item]) => item.parentElement);
  return elements;
}

module.exports = querySelectorAll;

// result = querySelectorAll("div.note < input.is-complete[checked]");
// console.log("The result is: ", result);
