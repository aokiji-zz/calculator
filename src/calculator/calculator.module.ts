import { Module } from '@nestjs/common';
import { CalculatorService } from './calculator.service';
import { CalculatorController } from './calculator.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  controllers: [CalculatorController],
  providers: [CalculatorService],
  imports: [PrismaModule, JwtModule],
})
export class CalculatorModule {}
