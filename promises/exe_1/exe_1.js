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
let results = [];
let runningTasks = 0;
/**
*  Expect to get an array equal to tasks.length
*  with the values or reasons for each of the promises.
*
*  [{value: 1}, {value:2}, {error: 'error'}, ...]
*/
const runNextPromise = () => {
   runningTasks++;
   //Get the task
   let task = tasks.shift();
   console.log("Starting task: ", task);
   task()
   .then(res => {
      console.log("Finishing task: ", res);
      results.push(res);
      if(tasks.length > 0)
         runNextPromise();
      else
         return new Promise((resolve, reject) => resolve(results));
   });
}

const runBatches = async (tasks, pool_size) => {
   do{
      runNextPromise();
   }while(runningTasks < pool_size);
};

// runBatches(tasks, pool_size).then(console.log);
runBatches();