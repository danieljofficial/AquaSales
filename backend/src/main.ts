// import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import { db } from './drizzle/db';
// import { SalesTable } from './drizzle/schema';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.setGlobalPrefix('api');
  await app.listen(process.env.PORT ?? 5000);
}
bootstrap();
