const obj = {
  foo: true,
  bar: true
}

describe.each([['foo'], ['bar']] as const)("The property %s", (prop) => {
  it("is true", () => {
    expect(obj[prop]).toBe(true)
  });
});
