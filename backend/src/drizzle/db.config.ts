// import { drizzle } from 'drizzle-orm/postgres-js';
// import postgres from 'postgres';
// import { ConfigService } from '@nestjs/config';

// export const createDatabaseConnection = (configService: ConfigService) => {
//   const connection = postgres({
//     host: configService.get<string>('database.host'),
//     port: configService.get<number>('database.port'),
//     database: configService.get<string>('database.database'),
//     user: configService.get<string>('database.user'),
//     password: configService.get<string>('database.password'),
//     ssl: false,
//   });

//   return drizzle(connection);
// };
