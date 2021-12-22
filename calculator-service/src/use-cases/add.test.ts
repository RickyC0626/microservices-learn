import { add } from "./add";

describe("add", () => {
  it("should return the sum of two numbers", () => {
    let val = add(6, 7);
    expect(val).toEqual(13);
  });

  it("should return the sum of an arbitrary amount of numbers", () => {
    let val = add(1, 2, 3, 4, 5);
    expect(val).toEqual(15);
  });
});