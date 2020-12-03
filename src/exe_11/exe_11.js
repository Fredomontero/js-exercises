

const querySelectorAll = (selector) => {
  console.log("Selector: ", selector);
  selector = selector.replace(/\s/g,'');
  console.log("Selector: ", selector);
  let input = selector.split("<");
  console.log(input);
  console.log(document);
  // const element = document.querySelectorAll(input[0] + " " + input[1]);
  const element = document.querySelector(input[0] + " " + input[1]);
  console.log(element);
}

result = querySelectorAll("div.note < input.is-complete[checked]");
console.log("The result is: ", result);
