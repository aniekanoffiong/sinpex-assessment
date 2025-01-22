import { CaseDtoInterface } from "../../../../interfaces/CaseInterface";
import { IsString, IsNotEmpty, IsNumber, IsEnum } from 'class-validator';
import { CaseStatus } from "../../../../interfaces/CaseStatus";

export class CreateCaseDto implements CaseDtoInterface {
  @IsNumber()
  @IsNotEmpty()
  boardId: number

  @IsString()
  @IsNotEmpty()
  title: string

  @IsString()
  @IsNotEmpty()
  description: string

  @IsEnum(CaseStatus)
  @IsNotEmpty()
  status: CaseStatus

  @IsNumber()
  @IsNotEmpty()
  order: number;
}
