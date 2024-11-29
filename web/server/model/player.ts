import type { Card } from "./card";

export class Player {
  name: string;
  population: number = 1;
  hand: Card[] = [];
  playingCard?: Card;
  influencedByPlayers: { playerName: string, influenceLevel: number }[] = [];

  constructor(name: string) {
    this.name = name;
  }
  addCard(card: Card) {
    this.hand.push(card);
  }
  playCard(cardIndex: number) {
    const card = this.hand.splice(cardIndex, 1)[0];
    if (card === undefined) return 'Could not play card.';
    this.playingCard = card;
    return 'Played card.';
  }
  influencePlayer(player: Player) {
    const existingInfluence = this.influencedByPlayers.find(influence => influence.playerName === player.name);
    if (existingInfluence) existingInfluence.influenceLevel++;
    else this.influencedByPlayers.push({ playerName: player.name, influenceLevel: 1 });
  }
}