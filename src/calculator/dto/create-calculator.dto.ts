// src/articles/dto/create-article.dto.ts

import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class CalculatorDto {
  @IsNumber()
  @ApiProperty({ required: true })
  paramA: number;

  @IsNumber()
  @ApiProperty({ required: true })
  paramB: number;
}
