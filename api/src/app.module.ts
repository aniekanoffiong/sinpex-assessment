import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BoardModule } from './board/board.module';
import { CaseModule } from './case/case.module';

@Module({
  imports: [BoardModule, CaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
