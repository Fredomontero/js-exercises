const counter = () => {
  let count = 0;
  return function() {
    return count++;
  }
}

let cnt1 = counter();
console.log(cnt1());
console.log(cnt1());
console.log(cnt1());