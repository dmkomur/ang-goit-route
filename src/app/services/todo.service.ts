import { Injectable } from '@angular/core';

export interface Todo {
  id: number;
  name: string;
  description?: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private todoList: Todo[];
  constructor() {
    this.todoList = [
      {
        id: 1,
        name: 'Sample Todo',
        completed: false,
        description: 'This is a sample todo item',
      },
      {
        id: 2,
        name: 'riso Todo',
        completed: false,
        description: 'This is riso todo item',
      },
      {
        id: 3,
        name: 'Sosmple Todo',
        completed: false,
        description: 'This is sosmple todo item',
      },
    ];
  }

  getTodoList() {
    return this.todoList;
  }
  getTodoById(id: string | null) {
    return this.todoList.find((todo) => todo.id === Number(id));
  }
}
