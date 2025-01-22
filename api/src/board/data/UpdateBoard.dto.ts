import { BoardDtoInterface } from "../../../../interfaces/BoardInterface";
import { IsString, IsNotEmpty } from 'class-validator';

export class UpdateBoardDto implements BoardDtoInterface {
  @IsString()
  @IsNotEmpty()
  title: string
}
