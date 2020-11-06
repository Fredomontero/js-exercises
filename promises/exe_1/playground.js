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