import { CreateBoardDto } from "../data/CreateBoard.dto";
import { UpdateBoardDto } from "../data/UpdateBoard.dto";
import { BoardDomain } from "../model/board.domain";

export interface IBoardRepository {
  list(): Promise<BoardDomain[]>;

  create(data: CreateBoardDto): Promise<BoardDomain>;

  update(id: number, data: UpdateBoardDto): Promise<BoardDomain>;
}
