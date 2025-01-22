import { Inject, Injectable } from '@nestjs/common';
import { CaseDto } from '../data/Case.dto';
import { ICaseRepository } from './case.repository.interface';
import { CreateCaseDto } from '../data/CreateCase.dto';
import { UpdateCaseDto } from '../data/UpdateCase.dto';

@Injectable()
export class CaseService {
  constructor(
    @Inject("ICaseRepository")
    protected caseRepository: ICaseRepository,
  ) {}

  async getCases(boardId: number): Promise<CaseDto[]> {
    const boardList = await this.caseRepository.list(boardId);
    return Promise.all(boardList.map(CaseDto.toCaseDto))
  }

  async createCase(data: CreateCaseDto): Promise<CaseDto> {
    const board = await this.caseRepository.create(data);
    return CaseDto.toCaseDto(board)
  }

  async updateCase(id: number, data: UpdateCaseDto): Promise<CaseDto> {
    const board = await this.caseRepository.update(id, data);
    return CaseDto.toCaseDto(board)
  }
}
