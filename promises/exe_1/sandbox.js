//Example 1
// let p1 = new Promise((resolve, reject) => {
//   let value = false;
//   if(value)
//     resolve("Success");
//   else
//     reject("Error");
// });

// p1.then( msg => console.log("The message is: ", msg))
// .catch( error => console.log(" Error: ", error));

//Example 2
// let p2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // resolve({name: "Christian"});
//     reject("Can't connect to DB");
//   }, 2000);
// });

// p2.then(user => console.log("The user is: ", user.name))
// .catch( error => console.log("The error is: ", error));

//creating a promise around an old callback API
const delay = ms => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(ms);
  }, ms);
});

// delay(2500)
// .then(time => console.log(time + "ms has passed"));

Promise.all([delay(2000), delay(1750), delay(1500), delay(1000)])
.then(values => {
  console.log("Everything resolved: ", values);
})
.catch( error => console.log("Failed: ", error));

//Example

function* myIteratorFactory(arr) {
  for (let i = 0; i < arr.length; i++) {
    yield(arr[i])
  }
}


function delayPromise(text, ms) {
  return function() {
    return new Promise((resolve, reject) => {
      console.log('[%s] Promise with value %s just started', new Date().toISOString(), text)
      setTimeout(() => resolve(text), ms)
    }).then(() => console.log('[%s] Promise with value %s just ended', new Date().toISOString(), text))
  }
}

var promArr = [
  delayPromise('hi', 1500),
  delayPromise('alex', 2000),
  delayPromise('how', 1700),
  delayPromise('are', 1800),
  delayPromise('you', 1500),
]

var que = 0
var myIterator = myIteratorFactory(promArr)


function executor(r) {

  while (que < 3) {
    var next = myIterator.next()
    if (next.done) return;

    next.value()
      .then(() => {
        que--
        executor(r)
        if (que == 0) r()
      })
    que++
  }



}
executor(() => console.log('i am done for today!'))