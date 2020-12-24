(function(global){
  //root of html 
  let root = document.getElementById('results'); 

  //if pass color is green, else is red
  const result = (text, pass) => {
      const el = document.createElement('li');
      el.textContent = text;
      pass!== undefined && (el.style.color = pass? 'green' : 'red');
      return el;
  }

  const assert = (pass, message) => root.appendChild(result(message,pass));

  const test = (description, testBlock) => {
      let parent = root;
      root = assert(undefined, description)
              .appendChild(document.createElement('ul'));
      testBlock();
      root = parent;
  }

  const setTimeout = (mCallback, mDelay) => {
    console.log(`Running ${mCallback} after ${mDelay} milliseconds`);
  }

  global.assert = assert;
  global.test = test;
  global.setTimeout = setTimeout;
})(window);