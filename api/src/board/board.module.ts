import { Module } from '@nestjs/common';
import { BoardController } from './board.controller';
import { BoardService } from './service/board.service';
import { BoardRepository } from './model/board.repository';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [BoardController],
  providers: [
    BoardService,
    {
      provide: "IBoardRepository",
      useClass: BoardRepository,
    },
  ],
})
export class BoardModule {}
