import { Inject, Injectable } from '@nestjs/common';
import { BoardDto } from '../data/Board.dto';
import { IBoardRepository } from './iboard.repository';
import { CreateBoardDto } from '../data/CreateBoard.dto';
import { UpdateBoardDto } from '../data/UpdateBoard.dto';

@Injectable()
export class BoardService {
  constructor(
    @Inject("IBoardRepository")
    protected boardRepository: IBoardRepository,
  ) {}

  async getBoards(): Promise<BoardDto[]> {
    const boardList = await this.boardRepository.list();
    return Promise.all(boardList.map(BoardDto.toBoardDto))
  }

  async createBoard(data: CreateBoardDto): Promise<BoardDto> {
    const board = await this.boardRepository.create(data);
    return BoardDto.toBoardDto(board)
  }

  async updateBoard(id: number, data: UpdateBoardDto): Promise<BoardDto> {
    const board = await this.boardRepository.update(id, data);
    return BoardDto.toBoardDto(board)
  }
}
