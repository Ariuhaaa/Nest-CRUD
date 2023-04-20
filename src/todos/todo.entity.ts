import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Todo {
  @Prop()
  taskName: string;

  @Prop()
  createdDate: Date;

  @Prop()
  isDone: boolean;

  @Prop()
  title: string;
  completed: boolean;
}

// export type TodoDocument = Todo & Document;

export const todoListSchema = SchemaFactory.createForClass(Todo);
