export {};

interface Profile {
  name: string;
  isUnderTwenty: boolean;
  [index: string]: string | number | boolean;
}

let profile: Profile = {
  name: 'Ham',
  isUnderTwenty: false,
};

// How to write index-signatures
// { [ index: typeofIndex ]: typeForValue }

profile.name = 'Ham';

profile.age = 43;
profile.nationality = 'Japan';

console.log(profile);
