const { expect } = require('@jest/globals');
const { queryRetry, handleSuccess, handleErrorOrMaxRetryExceeded, urlQuery } = require('./exe_2');
jest.setTimeout(100000);

test('Completion time should be around 3 seconds for maxRetry = 3 ;delay = 1000; useIncrement = false and ivalid URL' , async done => {
  let startTime, endTime;
  try{
    startTime = new Date();
    await queryRetry(urlQuery('https://fake.com'), 3, 1000, false)
    done();
  }catch(error){
    endTime = new Date();
    let timeDiff = endTime - startTime;
    expect(timeDiff).toBeGreaterThan(2750);
    expect(timeDiff).toBeLessThan(3250);
    done()
  }
});

test('Completion time should be around 6 seconds for maxRetry = 3 ;delay = 1000; useIncrement = true and ivalid URL', async done => {
  let startTime, endTime;
  try{
    startTime = new Date();
    await queryRetry(urlQuery('https://fake.com'), 3, 1000, true)
    done();
  }catch(error){
    endTime = new Date();
    let timeDiff = endTime - startTime;
    expect(timeDiff).toBeGreaterThan(5750);
    expect(timeDiff).toBeLessThan(6250);
    done()
  }
});

test("Expect results to be { status: 200, data: {name: 'Christian Montero'}} if URL is 'https://example.com/data'", async done => {
  try{
    let data = await queryRetry(urlQuery('https://example.com/data'), 3, 1000, true);
    console.log(data);
    expect(data).toMatchObject({ status: 200, data: {name: 'Christian Montero'} })
    done();
  }catch(error){done(error)}
});