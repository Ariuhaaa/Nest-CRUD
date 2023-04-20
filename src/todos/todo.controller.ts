import { Body, Controller } from '@nestjs/common';
import { TodoService } from './todo.service';
import { Todo } from './todo.entity';
import { Post, Patch, Delete, Get } from '@nestjs/common';
import { Response } from 'express';
import { Res, Param } from '@nestjs/common';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Post()
  create(@Body() data: Todo) {
    return this.todoService.create(data);
  }

  @Patch(':id')
  async update(
    @Res() res: Response,
    @Body() data: Todo,
    @Param('id') id: string,
  ) {
    const result = await this.todoService.update(id, data);
    res.json(result);
  }

  @Delete(':id')
  async delete(@Res() res: Response, @Param('id') id: string) {
    const result = await this.todoService.delete(id);
    res.json(result);
  }

  @Get()
  async findAll() {
    return this.todoService.findAll();
  }
}
