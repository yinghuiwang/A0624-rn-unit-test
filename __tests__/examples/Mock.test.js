
function forEach(items, callback) {
  for (let index = 0; index < items.length; index ++) {
    callback(items[index]);
  }
}

test('mock', () => {
  const mockCallback = jest.fn();
  forEach([0,1], mockCallback);

  // 模拟函数被调用两次
  expect(mockCallback.mock.calls.length).toBe(2);

  // 第一次调用函数的第一个参数是 0
  expect(mockCallback.mock.calls[0][0]).toBe(0);

  // 第二次调用函数的第二个参数是 1
  expect(mockCallback.mock.calls[1][0]).toBe(1);
});

test('mock call this', () => {
  const myMock = jest.fn();

  const a = new myMock();
  const b = {};
  const bound = myMock.bind(b);
  bound();

  console.log(myMock.mock.instances);
});

test('test value insert code', () => {
  const myMock = jest.fn();
  console.log(myMock());

  myMock
    .mockReturnValueOnce(10)
    .mockReturnValueOnce('x')
    .mockReturnValue(true);
  console.log(myMock(), myMock(), myMock(), myMock());
});

test('return value', () => {
  const filterTestFn = jest.fn();
  filterTestFn.mockReturnValueOnce(true).mockReturnValueOnce(false);

  const result = [11, 12].filter(filterTestFn);

  console.log(result);

  console.log(filterTestFn.mock.calls);
});

test('replace function', () => {
  const myMockFn = jest.fn(cb => cb(null, true));

  myMockFn((err, val) => console.log(val));
  myMockFn((err, val) => console.log(err));
})

// jest.mock('../src/foo');
// import foo from '../../src/foo';
// test('mock implementation', () => {
//   // foo is a mock function
//   foo.mockImplementation(() => 42);
//   console.log(foo());
// });
