export {};

function bmi(height: number, weight: number): number {
  return weight / height ** 2;
}

console.log(bmi(1.74, 51));
