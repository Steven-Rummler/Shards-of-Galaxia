import type { Game } from "./game";
import type { Player } from "./player";

export abstract class Card {
  abstract title: string;
  abstract text: string;
  abstract type: 'action' | 'interaction';
  abstract play(game: Game, player: Player, target?: Player): void;
}

abstract class ActionCard extends Card {
  type: 'action' = 'action';
  abstract play(game: Game, player: Player): void;
}

abstract class InteractionCard extends Card {
  type: 'interaction' = 'interaction';
  abstract play(game: Game, player: Player, target: Player): void;
}