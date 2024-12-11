import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { CARD_TYPE } from '../enums/card_type.type';

export class CreateCardDto {
  @IsString()
  @IsNotEmpty()
  identification: string;

  balance: number;

  limit: number;

  due_date: number;

  @IsEnum(CARD_TYPE)
  card_type: CARD_TYPE;
}
