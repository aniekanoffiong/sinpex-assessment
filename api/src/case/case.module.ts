import { Module } from '@nestjs/common';
import { CaseController } from './case.controller';
import { CaseService } from './service/case.service';
import { CaseRepository } from './model/case.repository';

@Module({
  imports: [],
  controllers: [CaseController],
  providers: [
    CaseService,
    {
      provide: "ICaseRepository",
      useValue: CaseRepository,
    },
  ],
})
export class CaseModule {}
