// import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import { db } from './drizzle/db';
// import { SalesTable } from './drizzle/schema';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 5000);
  // await db.insert(SalesTable).values({
  //   date: new Date('2024-12-30'),
  //   bagsSold: 200,
  //   revenue: 3000.0,
  // });
  // const test = await db.query.SalesTable.findFirst();
  // console.log(test);
}
bootstrap();
