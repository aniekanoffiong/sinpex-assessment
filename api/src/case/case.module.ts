import { Module } from '@nestjs/common';
import { CaseController } from './case.controller';
import { CaseService } from './service/case.service';
import { CaseRepository } from './model/case.repository';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [CaseController],
  providers: [
    CaseService,
    {
      provide: "ICaseRepository",
      useClass: CaseRepository,
    },
  ],
})
export class CaseModule {}
