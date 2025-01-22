import { Body, Controller, Get, Param, ParseIntPipe, Patch, Post, Query } from '@nestjs/common';
import { CaseService } from './service/case.service';
import { CaseDto } from './data/Case.dto';
import { CreateCaseDto } from './data/CreateCase.dto';

@Controller()
export class CaseController {
  constructor(private readonly caseService: CaseService) {}

  @Get("/api/cases")
  list(
    @Query("boardId", ParseIntPipe)
    boardId: number
  ): Promise<CaseDto[]> {
    return this.caseService.getCases(boardId);
  }

  @Post("/api/cases")
  create(
    @Body() data: CreateCaseDto
  ): Promise<CaseDto> {
    return this.caseService.createCase(data);
  }

  @Patch("/api/cases/:id")
  update(
    @Param("id", ParseIntPipe) id: number,
    @Body() data: CreateCaseDto
  ): Promise<CaseDto> {
    return this.caseService.updateCase(id, data);
  }
}
