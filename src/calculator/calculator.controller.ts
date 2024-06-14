import { Controller, Post, Body, UseFilters } from '@nestjs/common';
import { CalculatorService } from './calculator.service';
import { CalculatorDto } from './dto/create-calculator.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { PrismaClientExceptionFilter } from 'src/prisma-client-exception.filter';
import { CalculatorEntity } from './entities/calculator.entity';

@Controller('calculator')
@ApiTags('calculator')
@UseFilters(PrismaClientExceptionFilter)
export class CalculatorController {
  constructor(private readonly calculatorService: CalculatorService) {}

  @Post('subtraction')
  @ApiCreatedResponse({ type: CalculatorEntity })
  subtraction(@Body() body: CalculatorDto) {
    return this.calculatorService.subtraction(body);
  }

  @Post('addition')
  @ApiOkResponse({ type: CalculatorEntity })
  addition(@Body() body: CalculatorDto) {
    return this.calculatorService.addition(body);
  }

  @Post('multiplication')
  @ApiOkResponse({ type: CalculatorEntity })
  multiplication(@Body() body: CalculatorDto) {
    return this.calculatorService.multiplication(body);
  }

  @Post('division')
  @ApiOkResponse({ type: CalculatorEntity })
  division(@Body() body: CalculatorDto) {
    return this.calculatorService.division(body);
  }
}
