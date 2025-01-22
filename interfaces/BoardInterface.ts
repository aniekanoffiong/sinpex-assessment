import { type CardInterface } from './CardInterface';

export interface BoardInterface {
  id: number;
  title: string;
  items: CardInterface[]
}