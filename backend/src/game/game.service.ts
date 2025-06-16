import { Injectable } from '@nestjs/common';

export interface Player {
  id: number;
  x: number;
  y: number;
  team: 'A' | 'B';
}

export interface GameState {
  ball: { x: number; y: number };
  players: Player[];
  score: { A: number; B: number };
}

@Injectable()
export class GameService {
  private state: GameState = {
    ball: { x: 50, y: 50 },
    players: [],
    score: { A: 0, B: 0 },
  };

  constructor() {
    this.initPlayers();
  }

  private initPlayers() {
    for (let i = 0; i < 5; i++) {
      this.state.players.push({ id: i, x: 10, y: 20 * i + 10, team: 'A' });
      this.state.players.push({ id: i + 5, x: 90, y: 20 * i + 10, team: 'B' });
    }
  }

  getState(): GameState {
    return this.state;
  }

  moveBall(x: number, y: number) {
    this.state.ball = { x, y };
  }
}
