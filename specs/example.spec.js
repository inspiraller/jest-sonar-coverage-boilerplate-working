const {somethingElse} = require('../src/somefile');
describe("somethingElse", () => {
  it("should show me", () => {
      expect(somethingElse('me')).toBe('me');
  });
});
