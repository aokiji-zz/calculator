// src/articles/entities/article.entity.ts

import { ApiProperty } from '@nestjs/swagger';

export class CalculatorEntity {
  @ApiProperty()
  paramA: number;

  @ApiProperty()
  paramB: number;

  @ApiProperty()
  result: number;
}
