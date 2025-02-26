import { drizzle, NodePgDatabase } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import * as schema from './schema';
import 'dotenv/config';
import { faker } from '@faker-js/faker';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: false,
});

const db = drizzle(pool, { schema }) as NodePgDatabase<typeof schema>;
async function main() {
  // const saleIds = await Promise.all(
  //   Array(10)
  //     .fill('')
  //     .map(async () => {
  //       const sale = await db
  //         .insert(schema.SalesTable)
  //         .values({
  //           // unitPrice: faker.number.int({min: 0, max: 400}),
  //           description: "water",
  //           bagsSold: faker.number.int({ min: 0, max: 1000 }),
  //           revenue: faker.number.int({ min: 0, max: 10000 }),
  //         })
  //         .returning();
  //       return sale[0].id;
  //     }),
  // );

  const userIds = await Promise.all(
    Array(10)
      .fill('')
      .map(async () => {
        const roles = ['admin', 'dev', 'intern'];
        const randomRole = roles[Math.floor(Math.random() * roles.length)];
        const user = await db
          .insert(schema.UsersTable)
          .values({
            name: faker.person.fullName(),
            email: faker.internet.email(),
            password: faker.internet.password(),
            role: randomRole,
          })
          .returning();
        return user[0].id;
      }),
  );
}

main()
  .then((value) => {
    console.log('Successfully seeded, Value: ', value);
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(0);
  });
