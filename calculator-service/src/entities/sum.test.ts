import sum from "./sum";

describe("sum", () => {
  it("should return a finite number", () => {
    expect(() => sum(NaN, 3)).toThrow("Params must not contain NaN");
  });

  it("parameters should not exceed the max value", () => {
    expect(sum(Number.MAX_VALUE)).toEqual(Number.MAX_VALUE);
    expect(sum(-Number.MAX_VALUE)).toEqual(-Number.MAX_VALUE);
    expect(() => sum(Number.MAX_VALUE + Number.MAX_VALUE)).toThrow("Params must not exceed MAX_VALUE");
    expect(() => sum(-Number.MAX_VALUE + -Number.MAX_VALUE)).toThrow("Params must not exceed MAX_VALUE");
  });

  it("should return a number not exceeding the max possible value", () => {
    let val = sum(Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
    expect(val).toBeLessThanOrEqual(Number.MAX_VALUE);
    val = sum(-Number.MAX_SAFE_INTEGER, -Number.MAX_SAFE_INTEGER);
    expect(val).toBeGreaterThanOrEqual(-Number.MAX_VALUE);
    expect(() => sum(Number.MAX_VALUE, Number.MAX_VALUE)).toThrow("Sum must not exceed MAX_VALUE");
    expect(() => sum(-Number.MAX_VALUE, -Number.MAX_VALUE)).toThrow("Sum must not exceed MAX_VALUE");
  });

  it("should return 0 if parameters are empty", () => {
    let val = sum();
    expect(val).toEqual(0);
  });

  it("should return the same number if one parameter is empty", () => {
    let val = sum(5);
    expect(val).toEqual(5);
  });

  it("should return the sum of two numbers", () => {
    let val = sum(3, 4);
    expect(val).toEqual(7);
  });

  it("should return the sum of an arbitrary amount of numbers", () => {
    let val = sum(1, 2, 3);
    expect(val).toEqual(6);
  });

  it("should pass auxillary test cases", () => {
    let testCases = [1,2,3,4,5,6,7,8,9];
    expect(sum(testCases[5])).toEqual(6);
    expect(sum(testCases[0], testCases[1])).toEqual(3);
    expect(sum(testCases[2], testCases[3])).toEqual(7);
    expect(sum(testCases[4], testCases[5], testCases[6])).toEqual(18);
    expect(sum(testCases[5], testCases[6], testCases[7], testCases[8])).toEqual(30);
  });
});