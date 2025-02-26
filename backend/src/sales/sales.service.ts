import { Inject, Injectable } from '@nestjs/common';
import { eq } from 'drizzle-orm';
import { DRIZZLE } from 'src/drizzle/drizzle.module';
import { SalesTable } from 'src/drizzle/schema';
import { DrizzleDb } from 'src/drizzle/types/drizzle.db';
import { CreateSaleDto } from './dto/create-sale.dto';

@Injectable()
export class SalesService {
  constructor(@Inject(DRIZZLE) private database: DrizzleDb) {}

  async findAll() {
    const sales = await this.database.select().from(SalesTable);
    console.log(sales);
    return sales;
  }

  async findOne(id: string) {
    const sale = await this.database
      .select()
      .from(SalesTable)
      .where(eq(SalesTable.id, id))
      .limit(1);
    return sale[0];
  }

  async create(createSaleDto: CreateSaleDto) {
    const newSale = await this.database
      .insert(SalesTable)
      .values(createSaleDto);
    return newSale[0];
  }
}
