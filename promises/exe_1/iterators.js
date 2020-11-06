const delay = (ms, n) => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(ms);
  }, ms);
});

const tasks = [
  delay(1000, 1),
  delay(1000, 2),
  delay(2000, 3),
  delay(1500, 4)
];

const pool_size = 2;

const runBatches = (tasks, pool_size) => new Promise((resolve, reject) => {
  //Declare results array
  let results = [];
  let runningTasks = 0;

  // Iterate through array
  for(let i = 0; i < tasks.length; i++){
    console.log("Starting task", tasks[i]);
    tasks[i].then( res => {
      //When each promise is either resolved or rejected remove from array
      console.log("Finishing task: ", tasks[i]);
      results.push(res);
      if(results.length === tasks.length)
        resolve(results);
    });
  }

});

//Running the tasks
runBatches(tasks, pool_size)
.then( console.log);

