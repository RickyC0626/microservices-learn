import { sum } from "../entities";

export const add = (...nums: number[]): number => {
  return sum(...nums);
};