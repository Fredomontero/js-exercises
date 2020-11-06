const taskFactorySample = (delay, resolve, val) => 
       () => new Promise((res, rej)=>setTimeout(resolve?res:rej,delay, val))
       
const tasks = [
  taskFactorySample(500,true, 1),
  taskFactorySample(1000,true, 2),
  taskFactorySample(5000,false, 'error'),
   taskFactorySample(2000,true, 4),
   taskFactorySample(1000,false, 'error'),
   taskFactorySample(1000,false, 'error'),
];
// only run two promises at a time
const pool_size = 2;

/**
*  Expect to get an array equal to tasks.length
*  with the values or reasons for each of the promises.
*
*  [{value: 1}, {value:2}, {error: 'error'}, ...]
*/

const runBatches = async (tasks, pool_size) => {
  let results = [];
  let runningTasks = 0;
  let promises = [];

  // for(i = 0; i<tasks.length; i++){
  //   promises.push(tasks[i]());
  // }

  do{
    let task = tasks.shift();
    runningTasks++;
    console.log("Starting task: ", task);
    promises.push(task().then(() => {
      if(tasks.length > 0){
        let newTask = tasks.shift();
        promises.push(newTask());
      }
    }));
    // promises.push(task());
  }while(runningTasks < pool_size)

  await Promise.allSettled(promises)
  .then(values => {
    results = values;
  });

  return new Promise((resolve, reject) => resolve(results));
};

// runBatches(tasks, pool_size).then(console.log);
runBatches(tasks, pool_size).then(console.log);