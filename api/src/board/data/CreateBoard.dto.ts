import { BoardDtoInterface } from "../../../../interfaces/BoardInterface";
import { IsString, IsNotEmpty } from 'class-validator';

export class CreateBoardDto implements BoardDtoInterface {
  @IsString()
  @IsNotEmpty()
  title: string
}
