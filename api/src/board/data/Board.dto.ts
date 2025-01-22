import { BoardInterface } from "../../../../interfaces/BoardInterface";
import { CaseInterface } from "../../../../interfaces/CaseInterface";
import { BoardDomain } from "../model/board.domain";

export class BoardDto implements BoardInterface {
  constructor(
    public id: number,
    public title: string,
    public items: CaseInterface[],
    public created: Date,
    public updated: Date
  ) {}

  toBoardDto(boardDomain: BoardDomain) {
    return new BoardDto(
      boardDomain.id,
      boardDomain.title,
      [],
      boardDomain.created,
      boardDomain.updated,
    )
  }
}
