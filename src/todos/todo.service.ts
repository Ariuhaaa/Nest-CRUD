import { BadRequestException, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { create } from 'domain';
import { Todo } from './todo.entity';
import { todoListSchema } from './todo.entity';

@Injectable()
export class TodoService {
  constructor(
    @InjectModel('Todo')
    private readonly todoListModel: Model<Todo>,
  ) {}
  async create(data: Todo) {
    if (data.title === '') {
      throw new BadRequestException('Title is required');
    }
    const newTodo = new this.todoListModel(data);
    const result = await newTodo.save();
    return result;
  }

  async update(id: string, data: Todo) {
    const result = await this.todoListModel.findByIdAndUpdate(id, data);
    return result;
  }

  async delete(id: string) {
    const result = await this.todoListModel.findByIdAndDelete(id);
    return result;
  }

  async findAll() {
    const result = await this.todoListModel.find({});
    return result;
  }
  async findOne(id: number) {
    const result = await this.todoListModel.find({ id });
    return result;
  }
}
