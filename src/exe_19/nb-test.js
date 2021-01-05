(function(global){

  let root = document.getElementById('results');

  const result = (text, pass) => {
    const el = document.createElement('li');
    el.textContent = text;
    pass!== undefined && (el.style.color = pass? 'green' : 'red');
    return el;
  }

  const assert = (pass, message) => {
    console.log(`For ${message} the root is: `, root);
    return root.appendChild(result(message,pass))
  };

  function test (description, testBlock){
    const parent = root;
    function inner(){
      root = assert(undefined, description).appendChild(document.createElement('ul'));
      console.log("THIS INSIDE INNER: ", root);
      console.log("TESTBLOCK: ", testBlock[1]);
      let _this = {root}
      testBlock();
      root = parent;
    }
    inner();
  }

  const nativeSetTimeout = window.setTimeout;

  const setTimeout = function(cb, delay){
    var _this = this;
    var myArgs = Array.prototype.slice.call(arguments, 2);
    console.log("Custom setTimeout");
    console.log("CB: ", cb);
    console.log("THIS: ", this);
    console.log("ARGS: ", myArgs);
    return nativeSetTimeout(cb instanceof Function ? function () {
      cb.apply(_this, myArgs);
    } : cb, delay);
  };

  global.setTimeout = setTimeout;
  global.assert = assert;
  global.test = test;

})(window);