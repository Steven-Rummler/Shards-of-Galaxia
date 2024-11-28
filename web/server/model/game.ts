import type { Player } from "./player";

export class Game {
  id: string;
  players: Player[];
  round: number;

  constructor(existingIds: string[]) {
    this.id = generateId(existingIds);
    this.players = [];
    this.round = 0;
  }
  addPlayer(player: Player) {
    if (this.round > 0) throw new Error("Game has already started");
    this.players.push(player);
  }
  nextRound() {
    this.round++;
  }
}

const consonants = 'BCDFGHJKLMNPQRSTVWXYZ';
function generateId(existingIds: string[]): string {
  for (let i = 0; i < 100; i++) {
    const id = Array(4).fill(0).map(() => consonants[Math.floor(Math.random() * consonants.length)]).join('');
    if (!existingIds.includes(id)) return id;
  }
  throw new Error("Failed to generate unique ID");
}