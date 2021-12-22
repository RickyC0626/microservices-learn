import { sum } from "../entities";

export const subtract = (...nums: number[]): number => {
  const neg: number[] = nums.map((val, idx) => {
    return idx === 0 ? val : -val;
  });
  const result: number = sum(...neg);
  return result;
};