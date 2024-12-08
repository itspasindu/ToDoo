export interface Todo {
  id: string;
  title: string;
  completed: boolean;
  createdAt: Date;
}

export interface TodoList {
  id: string;
  name: string;
  todos: Todo[];
}