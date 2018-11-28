import { repository } from "@loopback/repository";
import { TodoListRepository } from "../repositories/todo-list.repository";
import { post, param, requestBody } from "@loopback/rest";
import { Todo } from "../models";

// Uncomment these imports to begin using these cool features!

// import {inject} from '@loopback/context';


export class TodoListTodoController {
  constructor(
    @repository(TodoListRepository) private todoListRepository: TodoListRepository
  ) { }

  @post("/todo-lists/{id}/todos")
  async create(@param.path.number('id') id: number, @requestBody() todo: Todo) {
    return await this.todoListRepository.todos(id).create(todo);
  }
}
