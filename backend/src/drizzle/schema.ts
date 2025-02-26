import { relations } from 'drizzle-orm';
import {
  date,
  integer,
  numeric,
  pgTable,
  serial,
  text,
  timestamp,
  uuid,
} from 'drizzle-orm/pg-core';

export const SalesTable = pgTable('sales', {
  id: uuid('id').primaryKey().defaultRandom(),
  unitPrice: integer('unitPrice').default(400),
  bagsSold: integer('bagsSold').notNull(),
  revenue: integer('revenue').notNull(),
  description: text('description'),
  createdAt: timestamp('createdAt').defaultNow(),
  userId: integer('userId').references(() => UsersTable.id),
});

export const SalesRelations = relations(SalesTable, ({ one }) => ({
  user: one(UsersTable, {
    fields: [SalesTable.userId],
    references: [UsersTable.id],
  }),
}));

export const UsersTable = pgTable('users', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  email: text('email').notNull(),
  password: text('password').notNull(),
  role: text('role').notNull(),
});
