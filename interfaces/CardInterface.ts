import { CardStatus } from './CardStatus'

export interface CardData {
  id: number;
  boardId: number;
  title: string;
  description: string;
  status: CardStatus;
}

export interface CardInterface extends CardData {
  created: Date;
  updated: Date;
}
