import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  private counterId = 1;
  private users: User[] = [
    {
      id: 1,
      name: "John",
      email: "john@mail.com",
      address: 'fake street 123',
      password: "123456",
      image: ""
    }
  ]
  create(createUserDto: CreateUserDto) {
    this.counterId = this.counterId + 1

    const newUser = {
      id: this.counterId,
      ...createUserDto
    };

    this.users.push(newUser);
    return newUser
  }

  findAll() {
    return this.users;
  }

  findOne(id: number) {
    const user = this.users.find((item) => item.id === id)
    if(!user) {
      throw new NotFoundException(`User doesn't exists`)
    }
    return user
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    const index = this.users.findIndex((product) => product.id == id);
    if (index >= 0) {
      this.users[index] = {
        ...this.users[index],
        ...updateUserDto,
      };

      return this.users[index];
    }

    return null;
  }

  delete(id: number) {
    const index = this.users.findIndex((item) => item.id === id)
    if ( index === -1) {
      throw new NotFoundException(`User not found`)
    }
    this.users.splice(index, 1)
    return true
  }
}
