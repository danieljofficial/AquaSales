import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { DRIZZLE } from 'src/drizzle/drizzle.module';
import { DrizzleDb } from 'src/drizzle/types/drizzle.db';
import { eq } from 'drizzle-orm';
import { UsersTable } from 'src/drizzle/schema';

@Injectable()
export class UsersService {
  constructor(@Inject(DRIZZLE) private database: DrizzleDb) {}

  async findAll(role?: 'dev' | 'intern' | 'admin') {
    const users = await this.database.select().from(UsersTable);
    return users;
  }

  async findOne(id: number) {
    const user = await this.database
      .select()
      .from(UsersTable)
      .where(eq(UsersTable.id, id))
      .limit(1);
    return user[0] ?? null;
  }

  async create(createUserDto: CreateUserDto) {
    const newUser = await this.database
      .insert(UsersTable)
      .values(createUserDto);
    return newUser[0];
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const updatedUser = await this.database
      .update(UsersTable)
      .set(updateUserDto)
      .where(eq(UsersTable.id, id));
    return updatedUser;
  }

  async delete(id: number) {
    const removedUser = await this.database
      .delete(UsersTable)
      .where(eq(UsersTable.id, id));
    return removedUser[0];
  }
}
