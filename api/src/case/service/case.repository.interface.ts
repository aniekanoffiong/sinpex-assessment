import { CreateCaseDto } from "../data/CreateCase.dto";
import { UpdateCaseDto } from "../data/UpdateCase.dto";
import { CaseDomain } from "../model/case.domain";

export interface ICaseRepository {
  list(boardId: number): Promise<CaseDomain[]>;

  create(data: CreateCaseDto): Promise<CaseDomain>;

  update(id: number, data: UpdateCaseDto): Promise<CaseDomain>
}