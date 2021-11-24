export {};

type Mojiretsu = string;
const fooString: string = 'Hello';
const fooMojirersu: Mojiretsu = 'Hello';

type Profile = {
  name: string;
  age: number;
};

const example1: Profile = {
  name: 'Ham',
  age: 43,
};

const example2: Profile2 = {
  name: 'Akira',
  age: 21,
};

type Profile2 = typeof example1;
