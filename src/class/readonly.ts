export {};

class VisaCard {
  constructor(public readonly owner: string) {}
}

let myCard = new VisaCard('Ham');
// myCard.owner = 'beacon';
console.log(myCard.owner);
