export {};

let numbers: number[] = [1, 2, 3];

//非推奨 <ジェネリクス（型を抽象化）>
let numbers2: Array<number> = [1, 2, 3];
let strings2: Array<string> = ['Tokyo', 'Osaka', 'Kyoto'];

console.log(numbers);
console.log(numbers2);
console.log(strings2);

let strings: string[] = ['TypeScript', 'JavaScript', 'CoffeeScript'];

let nijigenHairetsu: number[][] = [
  [50, 100],
  [150, 300],
];

let hairetsu: (string | number | boolean)[] = [1, false, 'Japan'];

console.log(strings);
console.log(nijigenHairetsu);
console.log(hairetsu);
