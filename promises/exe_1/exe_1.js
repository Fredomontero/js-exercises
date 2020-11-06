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

export const runBatches = (tasks, pool_size) => {
   return new Promise(resolve => {
      let results = [];
      let idx = 0;

      const startPromise = () => {
         console.log("IDX: ", idx);
         if(idx === tasks.length) return;
         console.log("Starting: ", tasks[idx]);
         tasks[idx++]()
         .then(result => {
            console.log("Finishing: ", result);
            results.push({value: result});
            if(results.length === tasks.length)
               resolve(results);
            else
               startPromise();
         })
         .catch(error => {
            console.log("Finishing: ", error);
            results.push({error: error});
            if(results.length === tasks.length)
               resolve(results);
            else
               startPromise();
         })
      }

      for(let i = 0; i < pool_size; i++)
         startPromise();
   });
};

// runBatches(tasks, pool_size).then(console.log);
runBatches(tasks, pool_size).then(console.log);