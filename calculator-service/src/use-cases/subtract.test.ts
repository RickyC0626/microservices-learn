import { subtract } from "./subtract";

describe("subtract", () => {
  it("should return 0 if two parameters are equal", () => {
    let val = subtract(Number.MAX_VALUE, Number.MAX_VALUE);
    expect(val).toEqual(0);
  });

  it("should return the difference between two numbers", () => {
    let val = subtract(4, 2);
    expect(val).toEqual(2);
  });

  it("should return the difference between an arbitrary amount of numbers", () => {
    let val = subtract(7, 3, 1);
    expect(val).toEqual(3);
  });

  it("should pass auxillary test cases", () => {
    let testCases = [1,2,3,4,5,6,7,8,9];
    expect(subtract()).toEqual(0);
    expect(subtract(testCases[5])).toEqual(6);
    expect(subtract(testCases[0], testCases[1])).toEqual(-1);
    expect(subtract(testCases[2], testCases[3])).toEqual(-1);
    expect(subtract(testCases[4], testCases[5], testCases[6])).toEqual(-8);
    expect(subtract(testCases[5], testCases[6], testCases[7], testCases[8])).toEqual(-18);
  });
});