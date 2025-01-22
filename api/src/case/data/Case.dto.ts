import {  CaseInterface } from "../../../../interfaces/CaseInterface";
import { CaseStatus } from "../../../../interfaces/CaseStatus";
import { CaseDomain } from "../model/case.domain";

export class CaseDto implements CaseInterface {
  constructor(
    public id: number,
    public boardId: number,
    public title: string,
    public description: string,
    public status: CaseStatus,
    public order: number,
    public created: Date,
    public updated: Date
  ) {}

  static toCaseDto(caseData: CaseDomain) {
    return new CaseDto(
      caseData.id,
      caseData.boardId,
      caseData.title,
      caseData.description,
      caseData.status,
      caseData.order,
      caseData.created,
      caseData.updated,
    )
  }
}
