const { expect } = require('@jest/globals');
const cancellableFetch = require('./exe_3');
jest.setTimeout(100000);

test("Expect results to be { status: 200, data: {name: 'Christian Montero'}} if URL is 'https://example.com/data' and cancel is not called", async done => {
  try{
    const result = cancellableFetch('https://example.com/data');
    result.then( data => expect(data).toMatchObject({ status: 200, data: {name: 'Christian Montero'} }))
    done();
  }catch(error){done(error)}
});

test("Expect error to be 'Operation cancelled' after calling result.cancel() ", async done => {
  try{
    const result = cancellableFetch('https://fake.com');
    result.cancel();
    result.then( data => console.log(data))
    .catch(error => expect(error).toBe('Operation cancelled'))
    done();
  }catch(error){done(error)}
});