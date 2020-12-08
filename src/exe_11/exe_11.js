/**
 * Function that returns the direct parent elements that matches the elements that match with the selector
 * 
 * @param {String} selector - selector string to perform the query
 */
const querySelectorAll = (selector) => {
  let [parentSelector, childSelector] = selector.split("<");
  if(childSelector === undefined) return document.querySelectorAll(selector);
  let matches = document.querySelectorAll(parentSelector + ">" + childSelector);
  let elements = Object.entries(matches).map(([key, item]) => item.closest(parentSelector));
  return elements;
}

module.exports = querySelectorAll;

// result = querySelectorAll("#one > #two > #three");
// console.log("The result is: ", result);


