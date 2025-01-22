import { PrismaClient } from "@prisma/client";
import { IBoardRepository } from "../service/iboard.repository";
import { BoardDomain, CreateBoard } from "./board.domain";
import { CreateBoardDto } from "../data/CreateBoard.dto";
import { UpdateBoardDto } from "../data/UpdateBoard.dto";
import { NotFoundException } from "@nestjs/common";

export class BoardRepository implements IBoardRepository {
  constructor(
    protected prismaClient: PrismaClient
  ) {}

  async list(): Promise<BoardDomain[]> {
    const boards = await this.prismaClient.board.findMany();
    return boards.map(BoardDomain.toBoardDomain)
  }

  async create(data: CreateBoardDto): Promise<BoardDomain> {
    const board = await this.prismaClient.board.create({
      data: CreateBoard.new(data)
    })
    return BoardDomain.toBoardDomain(board);
  }

  async update(id: number, data: UpdateBoardDto): Promise<BoardDomain> {
    const board = await this.prismaClient.board.findUnique({
      where: {id: id}
    })
    if (!board) {
      throw new NotFoundException(`Board of id ${id} not found`);
    }
    const updatedBoard = BoardDomain.update(board, data)
    const updated = await this.prismaClient.board.update({
      where: {id: id},
      data: updatedBoard
    })
    return BoardDomain.toBoardDomain(updated)
  }
}
