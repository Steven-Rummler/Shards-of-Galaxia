import type { Card } from "./card";

export class Player {
  name: string;
  hand: Card[];

  constructor(name: string) {
    this.name = name;
    this.hand = [];
  }
  addCard(card: Card) {
    this.hand.push(card);
  }
  playCard(cardIndex: number) {
    const card = this.hand.splice(cardIndex, 1)[0];
    return card;
  }
}