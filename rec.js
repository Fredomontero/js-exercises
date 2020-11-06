function batchFetch(urls, concurrentRequestsLimit) {
  return new Promise(resolve => {
      var documents = [];
      var index = 0;

      function recursiveFetch() {
          if (index === urls.length) {
              return;
          }
          fetch(urls[index++]).then(r => {
              documents.push(r.text());
              if (documents.length === urls.length) {
                  resolve(documents);
              } else {
                  recursiveFetch();
              }
          });
      }

      for (var i = 0; i < concurrentRequestsLimit; i++) {
          recursiveFetch();
      }
  });
}

var sources = [
  'http://www.example_1.com/',
  'http://www.example_2.com/',
  'http://www.example_3.com/',
  ...
  'http://www.example_100.com/'
];
batchFetch(sources, 5).then(documents => {
 console.log(documents);
});