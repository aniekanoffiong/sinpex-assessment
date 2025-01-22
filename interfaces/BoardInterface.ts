import { type CaseInterface } from './CaseInterface';

export interface BoardDataInterface {
  id: number;
  title: string;
  items: CaseInterface[]
}

export interface BoardInterface extends BoardDataInterface {
  created: Date;
  updated: Date;
}

export interface BoardDtoInterface {
  title: string
}
