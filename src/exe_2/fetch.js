const fetch = (url) => new Promise((resolve, reject) => {
  if(url === "https://fake.com"){
    reject({
      status: 404,
      error: 'Page not found'
    });
  }else{
    resolve({
      status: 200,
      data: {
        name: 'Christian Montero'
      }
    });
  }
});

module.exports = fetch;