import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  create(body: CreateUserDto) {
    return this.prisma.user.create({ data: body });
  }

  findOne(email: string) {
    return this.prisma.user.findUnique({ where: { email } });
  }
}
