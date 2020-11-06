const main = async () => {

    let limit = 3;

  const delay = (ms, n) => new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Resolving ", n);
      resolve(ms);
    }, ms);
  });

  let arrayOdPromisesGenerators = [
    () => delay(1000, 1),
    () => delay(1000, 2),
    () => delay(2000, 3),
    () => delay(1500, 4),
    () => delay(1500, 5),
    () => delay(1500, 6)
  ];

  let i = 0;
  let results = [];

  function doNextAction(){
    if(i < arrayOdPromisesGenerators.length){
      i++;
      let nextPromise = arrayOdPromisesGenerators[i];
      return Promise.resolve(
        nextPromise()
        .then(doNextAction)
      );
    }
  }

  let listOfPromises = [];

  while(i < limit && i<arrayOdPromisesGenerators.length){
    listOfPromises.push(doNextAction());
  }

  await Promise.all(listOfPromises);
}

main();