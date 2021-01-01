let globalFunction;

{
  let blockVar = 'a';
  globalFunction = function(){
    console.log(blockVar);
  }
}

globalFunction();