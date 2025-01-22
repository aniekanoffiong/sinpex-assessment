import { CaseDomain } from "../../case/model/case.domain";
import { BoardDtoInterface } from "../../../../interfaces/BoardInterface";
import { Board } from "@prisma/client";

export class CreateBoard {
  constructor(
    public title: string,
    public created: Date,
    public updated: Date,
  ) {}

  static new({
    title
  }: BoardDtoInterface): CreateBoard {
    return new CreateBoard(
      title,
      new Date(),
      new Date(),
    )
  }
}

export class BoardDomain {
  constructor(
    public id: number,
    public title: string,
    public cases: CaseDomain[],
    public created: Date,
    public updated: Date
  ) {}

  static update(
    currentBoard: Board,
    data: BoardDtoInterface,
  ): BoardDomain {
    return new BoardDomain(
      currentBoard.id,
      data.title,
      [],
      currentBoard.created,
      new Date(),
    )
  }

  static toBoardDomain(board: Board): BoardDomain {
    return new BoardDomain(
      board.id,
      board.title,
      [],
      board.created,
      board.updated
    )
  }
}