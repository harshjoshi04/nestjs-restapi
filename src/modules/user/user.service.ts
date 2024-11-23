import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entity/user.entity';
import { Repository } from 'typeorm';
import { createUserDTO } from '../../dto/user.dto';
import { ResponseEntity } from '../../interface/service.interface';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private userRes: Repository<User>) {}

  async createUser(user: createUserDTO): Promise<ResponseEntity> {
    try {
      await this.userRes.insert({
        name: user.name,
        email: user.email,
        password: user.password,
      });
      return {
        data: {},
        message: 'User Create Successfully.',
        statusCode: HttpStatus.CREATED,
        status: true,
      };
    } catch (error) {
      return {
        data: {},
        message: 'Internal server error',
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        status: false,
      };
    }
  }

  async getUser(): Promise<ResponseEntity> {
    try {
      const userList = await this.userRes.find();
      return {
        data: userList,
        message: 'User fetch Successfully.',
        statusCode: HttpStatus.OK,
        status: true,
      };
    } catch (error) {
      return {
        data: {},
        message: 'Internal server error',
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        status: false,
      };
    }
  }

  async updateUser(user: createUserDTO, id: number): Promise<ResponseEntity> {
    try {
      await this.userRes.update(
        {
          id: id,
        },
        {
          name: user.name,
          email: user.email,
          password: user.password,
        },
      );
      return {
        data: {},
        message: 'User Update Successfully.',
        statusCode: HttpStatus.OK,
        status: true,
      };
    } catch (error) {
      return {
        data: {},
        message: 'Internal server error',
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        status: false,
      };
    }
  }

  async deleteUser(id: number): Promise<ResponseEntity> {
    try {
      await this.userRes.delete({
        id: id,
      });
      return {
        data: {},
        message: 'User delete successfully.',
        statusCode: HttpStatus.OK,
        status: true,
      };
    } catch (error) {
      return {
        data: {},
        message: 'Internal server error',
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        status: false,
      };
    }
  }
}
