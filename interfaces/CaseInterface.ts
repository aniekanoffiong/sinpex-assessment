import { CaseStatus } from './CaseStatus'

export interface CaseDataInterface {
  id: number;
  boardId: number;
  title: string;
  description: string;
  status: CaseStatus;
}

export interface CaseInterface extends CaseDataInterface {
  created: Date;
  updated: Date;
}

export interface CaseDtoInterface {
  boardId: number;
  title: string;
  description: string;
  status: CaseStatus;
  order: number;
}
