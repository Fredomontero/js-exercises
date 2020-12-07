/**
 * Function that returns the direct parent elements that matches the elements that match with the selector
 * 
 * @param {String} selector - selector string to perform the query
 */
const querySelectorAll = (selector) => {
  let [parentSelector, childSelector] = selector.split("<");
  let matches = document.querySelectorAll(parentSelector + ">" + childSelector);
  let elements = Object.entries(matches).map(([key, item]) => {
    let parent = item.parentElement
    while(!parent.matches(parentSelector)) parent = parent.parentElement;
    return parent;
  });
  return elements;
}

module.exports = querySelectorAll;

// result = querySelectorAll("#one < #two > #four");
// console.log("The result is: ", result);
