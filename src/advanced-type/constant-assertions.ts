export {};

let name = 'Atsushi';

name = 'Ham';

let nickName = 'Ham' as const;

nickName = 'Ham';

let profile = {
  name: 'Atsushi',
  height: 178,
} as const;

// profile.name = 'Atsushi';
// profile.height = 178;
