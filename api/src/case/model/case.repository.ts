import { ICaseRepository } from "../service/case.repository.interface";
import { CaseDomain, CreateCase } from "./case.domain";
import { CreateCaseDto } from "../data/CreateCase.dto";
import { UpdateCaseDto } from "../data/UpdateCase.dto";
import { NotFoundException } from "@nestjs/common";
import { PrismaService } from '../../prisma/prisma.service';

export class CaseRepository implements ICaseRepository {
  constructor(
    protected prisma: PrismaService
  ) {}

  async list(): Promise<CaseDomain[]> {
    const boards = await this.prisma.case.findMany();
    return boards.map(CaseDomain.toCaseDomain)
  }

  async create(data: CreateCaseDto): Promise<CaseDomain> {
    const caseData = await this.prisma.case.create({
      data: CreateCase.new(data)
    })
    return CaseDomain.toCaseDomain(caseData);
  }

  async update(id: number, data: UpdateCaseDto): Promise<CaseDomain> {
    const caseData = await this.prisma.case.findUnique({
      where: {id: id}
    })
    if (!caseData) {
      throw new NotFoundException(`Case of id ${id} not found`);
    }
    const updatedCase = CaseDomain.update(caseData, data)
    const updated = await this.prisma.case.update({
      where: {id: id},
      data: updatedCase
    })
    return CaseDomain.toCaseDomain(updated)
  }
}
