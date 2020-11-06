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

const runBatches = (tasks, pool_size) => {
   return new Promise(resolve => {

      let results = [];
      let idx = 0;
      let errors = [
         'pool_size should be greater than 0', 
         'tasks cannot be empty',
         'tasks should be an Array',
      ];

      if(pool_size === 0) resolve(errors[0]);
      if(!tasks || tasks.length === 0) resolve(errors[1]);
      if(tasks instanceof Array === false) resolve(errors[2]);

      const startPromise = () => {
         if(idx === tasks.length) return;
         tasks[idx++]()
         .then(result => {
            results.push({value: result});
            if(results.length === tasks.length)
               resolve(results);
            else
               startPromise();
         })
         .catch(error => {
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

module.exports = {
   runBatches,
   taskFactorySample,
   tasks
};