const { expect } = require('@jest/globals');
const { queryRetry, handleSuccess, handleErrorOrMaxRetryExceeded, urlQuery } = require('./exe_2');
jest.setTimeout(100000);

test('Completion time should be around 4 seconds for maxRetry = 3 ;delay = 1000; useIncrement = false and ivalid URL' , async done => {
  let startTime, endTime;
  try{
    startTime = new Date();
    await queryRetry(urlQuery('https://httpbin.org/ip545545'), 3, 1000, false)
    done();
  }catch(error){
    endTime = new Date();
    let timeDiff = endTime - startTime;
    expect(timeDiff).toBeGreaterThan(3500);
    expect(timeDiff).toBeLessThan(4500);
    done()
  }
});

test('Completion time should be around 7 seconds for maxRetry = 3 ;delay = 1000; useIncrement = true and ivalid URL', async done => {
  let startTime, endTime;
  try{
    startTime = new Date();
    await queryRetry(urlQuery('https://httpbin.org/ip545545'), 3, 1000, true)
    done();
  }catch(error){
    endTime = new Date();
    let timeDiff = endTime - startTime;
    expect(timeDiff).toBeGreaterThan(6500);
    expect(timeDiff).toBeLessThan(7500);
    done()
  }
});

test("Expect results to be { origin: '189.202.83.51' } if URL is 'https://httpbin.org/ip'", async done => {
  try{
    let results = await queryRetry(urlQuery('https://httpbin.org/ip'), 3, 1000, true);
    let data = await results.json();
    console.log(data);
    expect(data).toMatchObject({ "origin": "189.202.83.51" })
    done();
  }catch(error){done(error)}
});