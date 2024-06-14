import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CalculatorDto } from './dto/create-calculator.dto';
import { CalculatorEntity } from './entities/calculator.entity';

@Injectable()
export class CalculatorService {
  constructor(private prisma: PrismaService) {}

  subtraction(body: CalculatorDto): CalculatorEntity {
    return {
      paramA: body.paramA,
      paramB: body.paramB,
      result: body.paramA - body.paramB,
    };
  }

  addition(body: CalculatorDto): CalculatorEntity {
    return {
      paramA: body.paramA,
      paramB: body.paramB,
      result: body.paramA + body.paramB,
    };
  }

  multiplication(body: CalculatorDto): CalculatorEntity {
    return {
      paramA: body.paramA,
      paramB: body.paramB,
      result: body.paramA * body.paramB,
    };
  }

  division(body: CalculatorDto): CalculatorEntity {
    return {
      paramA: body.paramA,
      paramB: body.paramB,
      result: body.paramA / body.paramB,
    };
  }

  // findDrafts() {
  //   return this.prisma.user.findMany({ where: { published: false } });
  // }

  // findAll() {
  //   return this.prisma.user.findMany({ where: { isActive: true } });
  // }

  // async findOne(email: string) {
  //   return this.prisma.user.findUnique({ where: { email } });
  // }

  // update(id: number, updateArticleDto: UpdateArticleDto) {
  //   return this.prisma.user.update({
  //     where: { id },
  //     data: updateArticleDto,
  //   });
  // }

  // remove(id: number) {
  //   return this.prisma.article.delete({ where: { id } });
  // }
}
