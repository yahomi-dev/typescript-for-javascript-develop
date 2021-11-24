export {};

let bmi: (height: number, weight: number) => number = (
  height: number,
  weight: number
): number => weight / height ** 2;

console.log(bmi(1.74, 51));
