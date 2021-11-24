export {};

let bmi: (height: number, weight: number, printable?: boolean) => number = (
  height: number,
  weight: number,
  printable?: boolean
): number => {
  const bmi: number = weight / height ** 2;

  if (printable) {
    console.log(bmi);
  }

  return bmi;
};

bmi(1.74, 51);

//bmi（身長、体重、console.logで出力できるかどうか？）
//bmi(1.74, 51, true);
//bmi(1.74, 51, false);
//bmi(1.74, 51);
