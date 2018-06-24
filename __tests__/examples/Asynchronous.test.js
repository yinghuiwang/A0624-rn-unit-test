
function fetchData(callback) {
  setTimeout(() => {callback('peanut butter')}, 1000);
}

test('the data is peanut butter 1', () => {
  function callback(data) {
    expect(data).toBe('peanut butter');
  }

  fetchData(callback);
});

test('the data is peanut butter 2', done => {
  function callback(data) {
    expect(data).toBe('peanut butter');
    done();
  }

  fetchData(callback)
});

function fetchDataPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('peanut butter');
    }, 2000);
  });
};

test('the data is peanut butter 3', () => {
  expect.assertions(1);
  return fetchDataPromise().then(data => {
    expect(data).toBe('peanut butter');
  })
});

function fetchDataPromiseReject() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('error');
    }, 2000);
  });
};

test('the data is peanut butter 4', () => {
  expect.assertions(1);
  return fetchDataPromiseReject().catch(e => expect(e).toMatch('error'));
});

test('the data is peanut butter5', () => {
  expect.assertions(1);
  return expect(fetchDataPromise()).resolves.toBe('peanut butter');
});

test('the data is peanut butter6', () => {
  expect.assertions(1);
  return expect(fetchDataPromiseReject()).rejects.toMatch('error');
});

test('the data is peanut butter2', async() => {
  expect.assertions(1);
  const data = await fetchDataPromise();
  expect(data).toBe('peanut butter');
});

test('the fetch fails with an error 7', async() => {
  expect.assertions(1);
  try {
    await fetchDataPromiseReject();
  } catch (e) {
    expect(e).toMatch('error');
  }
});

test('the data is peanut butter', async() => {
  expect.assertions(1);
  await expect(fetchDataPromise()).resolves.toBe('peanut butter');
});

test('the data is peanut butter', async() => {
  expect.assertions(1);
  await expect(fetchDataPromiseReject()).rejects.toMatch('error');
});