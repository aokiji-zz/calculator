// src/articles/dto/create-article.dto.ts

import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @ApiProperty({ required: true })
  email: string;

  @IsString()
  @ApiProperty({ required: true })
  name: string;

  @IsString()
  @ApiProperty({ required: true })
  hash: string;
}
