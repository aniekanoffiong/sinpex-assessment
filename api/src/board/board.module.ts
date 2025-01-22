import { Module } from '@nestjs/common';
import { BoardController } from './board.controller';
import { BoardService } from './service/board.service';
import { BoardRepository } from './model/board.repository';

@Module({
  imports: [],
  controllers: [BoardController],
  providers: [
    BoardService,
    {
      provide: "IBoardRepository",
      useValue: BoardRepository,
    },
  ],
})
export class BoardModule {}
