import { Controller, Get, Post, Body } from '@nestjs/common';
import { GameService } from './game.service';

@Controller('game')
export class GameController {
  constructor(private readonly gameService: GameService) {}

  @Get()
  getState() {
    return this.gameService.getState();
  }

  @Post('move')
  moveBall(@Body() body: { x: number; y: number }) {
    this.gameService.moveBall(body.x, body.y);
    return this.gameService.getState();
  }
}
