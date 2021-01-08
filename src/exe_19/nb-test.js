(function(global){

  let root = document.getElementById('results');

  const result = (text, pass) => {
    const el = document.createElement('li');
    el.textContent = text;
    pass!== undefined && (el.style.color = pass? 'green' : 'red');
    return el;
  }

  function assert (pass, message){
    console.log(`For ${message} the root is: `, this.root);
    return root.appendChild(result(message,pass))
  };

  function test(description, testBlock){
    const parent = root;
    root = assert(undefined, description).appendChild(document.createElement('ul'));
    (function f(root){
      console.log(root)
      testBlock.apply({root});
    })(root);
    root = parent;
  }

  const nativeSetTimeout = window.setTimeout;

  const setTimeout = function(cb, delay){
    console.log("[1] ROOT: ", root);
    var myArgs = Array.prototype.slice.call(arguments, 2);
    (function (root){
      return nativeSetTimeout(cb instanceof Function ? function () {
        //Here I need to have my root
        // root = document.getElementById('test');
        console.log("[2] ROOT: ", root);
        console.log("CB: ", cb);
        let _this = {root}
        cb.call(_this, myArgs);
      } : cb, delay)
    })(root)
  };

  global.setTimeout = setTimeout;
  global.assert = assert;
  global.test = test;

})(window);