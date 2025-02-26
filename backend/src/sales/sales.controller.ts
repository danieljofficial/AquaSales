import 'dotenv/config';
import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  ValidationPipe,
} from '@nestjs/common';
// import { db } from 'src/drizzle/db';
import { SalesTable } from 'src/drizzle/schema';
import { SalesService } from './sales.service';
import { CreateSaleDto } from './dto/create-sale.dto';

@Controller('sales')
export class SalesController {
  constructor(private readonly salesService: SalesService) {}

  @Get()
  findAll() {
    return this.salesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.salesService.findOne(id);
  }

  @Post()
  create(@Body(ValidationPipe) createSaleDto: CreateSaleDto) {
    return this.salesService.create(createSaleDto);
  }
}
