export {};

class MyNumberCard {
  private _owner: string;
  private _secretNumber: number;

  constructor(owner: string, secretNumber: number) {
    this._owner = owner;
    this._secretNumber = secretNumber;
  }

  get owner(): string {
    return this._owner;
  }
  set owner(ownerName: string) {
    this._owner = ownerName;
  }

  set secretNumber(secretNumber: number) {
    this._secretNumber = secretNumber;
  }
}

let card = new MyNumberCard('Hamsan', 1234567890);
card.secretNumber = 1111111111;
card.owner = 'aaaaa';

console.log(card.owner);
console.log(card.secretNumber);
