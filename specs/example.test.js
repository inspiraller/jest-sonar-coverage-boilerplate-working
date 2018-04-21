const {somethingElse, hello} = require('../src/somefile');
describe("somethingElse", () => {
  it("should show me", () => {
      expect(somethingElse('me')).toBe('me');
  });
});
describe("hello", () => {
  it("should show hello", () => {
      expect(hello()).toBe('hello');
  });
});
