import { Module } from '@nestjs/common';
import { SalesController } from './sales.controller';
import { SalesService } from './sales.service';
import { DrizzleModule } from 'src/drizzle/drizzle.module';

@Module({
  controllers: [SalesController],
  providers: [SalesService],
  imports: [DrizzleModule],
})
export class SalesModule {}
