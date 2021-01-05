function main(global){
  console.log("this: ", this);

  let root = document.getElementById('results');
  const result = (text, pass) => {
      const el = document.createElement('li');
      el.textContent = text;
      pass!== undefined && (el.style.color = pass? 'green' : 'red');
      return el;
  }

  const assert = (pass, message) => {
    console.log(`For message ${message} the root is: `, root);
    return root.appendChild(result(message,pass))
  };

  function test(description, testBlock){
    const parent = root;
    (function(){
      root = assert(undefined, description).appendChild(document.createElement('ul'));
      console.log("ROOT: ", root);
      testBlock();
    })()
    root = parent;
  }

  let nativeST = window.setTimeout;

  const customSetTimeout = (cb, delay) => {
    let _this = this;
    let myArgs = Array.prototype.slice.call(arguments, 2);
    return nativeST(cb.apply(_this, myArgs), delay);
  }

  global.setTimeout = customSetTimeout;
  global.assert = assert;
  global.test = test;
}

main(window);