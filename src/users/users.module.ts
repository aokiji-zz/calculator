// src/articles/articles.module.ts

import { Module } from '@nestjs/common';
import { UserService } from './users.service';
import { UserController } from './users.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  exports: [UserService],
  controllers: [UserController],
  providers: [UserService],
  imports: [PrismaModule],
})
export class UserModule {}
