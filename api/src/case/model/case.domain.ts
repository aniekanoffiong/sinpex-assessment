import { CaseStatus as CaseStatusEnum } from '../../../../interfaces/CaseStatus'
import { CaseDtoInterface } from '../../../../interfaces/CaseInterface'
import { Case, CaseStatus } from '@prisma/client'

export class CreateCase {
  constructor(
    public boardId: number,
    public title: string,
    public description: string,
    public status: CaseStatusEnum,
    public order: number,
    public created: Date,
    public updated: Date,
  ) {}

  static new({
    boardId,
    title,
    description,
    order,
  }: CaseDtoInterface): CreateCase {
    return new CreateCase(
      boardId,
      title,
      description,
      CaseStatusEnum.ACTIVE,
      order,
      new Date(),
      new Date()
    )
  }
}

export class CaseDomain {
  constructor(
    public id: number,
    public boardId: number,
    public title: string,
    public description: string,
    public status: CaseStatusEnum,
    public order: number,
    public created: Date,
    public updated: Date,
  ) {}

  static update(
    currentCase: Case,
    data: CaseDtoInterface
  ): CaseDomain {
    return new CaseDomain(
      currentCase.id,
      data.boardId || currentCase.boardId,
      data.title,
      data.description,
      data.status,
      data.order,
      currentCase.created,
      new Date()
    )
  }

  static toCaseDomain(current: Case): CaseDomain {
    return new CaseDomain(
      current.id,
      current.boardId,
      current.title,
      current.description,
      CaseDomain.toDomainStatus(current.status),
      current.order,
      current.created,
      current.updated,
    )
  }

  static toDomainStatus(caseStatus: CaseStatus): CaseStatusEnum {
    switch(caseStatus) {
      case CaseStatus.ACTIVE:
        return CaseStatusEnum.ACTIVE;
      case CaseStatus.COMPLETED:
        return CaseStatusEnum.COMPLETED;
    }
  }
}
