(function(global){

  let root = document.getElementById('results');

  const result = (text, pass) => {
    const el = document.createElement('li');
    el.textContent = text;
    pass!== undefined && (el.style.color = pass? 'green' : 'red');
    return el;
  }

  const assert = (pass, message) => root.appendChild(result(message,pass));

  function test(description, testBlock){
    const parent = root;
    root = assert(undefined, description).appendChild(document.createElement('ul'));
    testBlock();
    root = parent;
  }

  const nativeSetTimeout = window.setTimeout;

  const setTimeout = function(cb, delay){
    var myArgs = Array.prototype.slice.call(arguments, 2);
    function customCB(customRoot){
      return function(){
        root = customRoot;
        cb(...myArgs);
        root = parent;
      };
    }
    nativeSetTimeout(customCB(root), delay);
  };

  global.setTimeout = setTimeout;
  global.assert = assert;
  global.test = test;

})(window);