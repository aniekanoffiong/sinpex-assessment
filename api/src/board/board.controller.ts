import { Body, Controller, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { BoardService } from './service/board.service';
import { BoardDto } from './data/Board.dto';
import { CreateBoardDto } from './data/CreateBoard.dto';

@Controller()
export class BoardController {
  constructor(private readonly boardService: BoardService) {}

  @Get("/api/boards")
  list(): Promise<BoardDto[]> {
    return this.boardService.getBoards();
  }

  @Post("/api/boards")
  create(
    @Body() data: CreateBoardDto
  ): Promise<BoardDto> {
    return this.boardService.createBoard(data);
  }


  @Patch("/api/boards/:id")
  update(
    @Param("id", ParseIntPipe) id: number,
    @Body() data: CreateBoardDto
  ): Promise<BoardDto> {
    return this.boardService.updateBoard(id, data);
  }
}
