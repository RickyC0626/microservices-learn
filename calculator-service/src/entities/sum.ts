export const sum = (...nums: number[]): number => {
  return nums.reduce((acc: number, curr: number): number => {
    // NaN !== NaN -> true
    if(curr !== curr)
      throw new TypeError("Params must not contain NaN");
    if(Math.abs(curr) > Number.MAX_VALUE)
      throw new RangeError("Params must not exceed MAX_VALUE");
    if(Math.abs(acc + curr) > Number.MAX_VALUE)
      throw new RangeError("Sum must not exceed MAX_VALUE");
    return acc + curr;
  }, 0);
};