
describe('my beverage', () => {

  let a = 1, b = 2;
  beforeEach(() => {
    a = 3;
    b = 4;
  });

  test('is delicious', () => {
    expect(a + b).toBe(7);
  });

  test('is not sour', () => {
    expect(2 + 2).toBe(4);
  });
});