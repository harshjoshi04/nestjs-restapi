import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Res,
} from '@nestjs/common';
import { UserService } from './user.service';
import { createUserDTO } from 'src/dto/user.dto';
import { Response } from 'express';
import { ResponseEntity } from 'src/interface/service.interface';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(
    @Res() res: Response,
    @Body() user: createUserDTO,
  ): Promise<void> {
    const result: ResponseEntity = await this.userService.createUser(user);
    res.status(result.statusCode).json(result);
  }

  @Get()
  async getUser(@Res() res: Response): Promise<void> {
    const result: ResponseEntity = await this.userService.getUser();
    res.status(result.statusCode).json(result);
  }

  @Patch(':id')
  async updateUser(
    @Res() res: Response,
    @Body() user: createUserDTO,
    @Param('id') id: number,
  ): Promise<void> {
    const result: ResponseEntity = await this.userService.updateUser(user, id);
    res.status(result.statusCode).json(result);
  }

  @Delete(':id')
  async deleteUser(
    @Res() res: Response,
    @Param('id') id: number,
  ): Promise<void> {
    const result: ResponseEntity = await this.userService.deleteUser(id);
    res.status(result.statusCode).json(result);
  }
}
