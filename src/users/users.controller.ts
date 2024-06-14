import { Controller, Post, Body, UseFilters } from '@nestjs/common';
import { UserService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { PrismaClientExceptionFilter } from 'src/prisma-client-exception.filter';
import { UserEntity } from './entities/user.entity';
import { Public } from '../auth/constants/constants';

@Controller('users')
@ApiTags('users')
@UseFilters(PrismaClientExceptionFilter)
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Public()
  @Post()
  @ApiCreatedResponse({ type: UserEntity })
  create(@Body() body: CreateUserDto) {
    return this.userService.create(body);
  }
}
