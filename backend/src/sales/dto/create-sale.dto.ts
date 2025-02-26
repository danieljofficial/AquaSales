import {
  IsDate,
  IsDateString,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';

export class CreateSaleDto {
  //   @IsNotEmpty()
  @IsNumber()
  bagsSold: number;
  revenue: number;
  unitPrice: number;

  @IsString()
  description: string;
}
