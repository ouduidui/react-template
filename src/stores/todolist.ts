import { makePersistable } from 'mobx-persist-store'

export interface TodoType {
  id: number
  content: string
  done: boolean
  createAt: number
}

class TodoListStore {
  todos: TodoType[] = []

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true })
    makePersistable(this, {
      name: 'todolist',
      properties: ['todos'],
      storage: window.localStorage,
    })
  }

  addTodo(content: string) {
    this.todos.unshift({
      id: this.todos.length + 1,
      content,
      done: false,
      createAt: Date.now(),
    })
  }

  todoDone(id: number) {
    const idx = this.todos.findIndex(todo => todo.id === id)
    if (idx !== -1) {
      const todo = this.todos[idx]
      todo.done = !todo.done
      this.todos = this.todos.filter(t => t !== todo)
      if (todo.done)
        this.todos.push(todo)
      else
        this.todos.unshift(todo)
    }
  }
}

const todoListStore = new TodoListStore()

export {
  todoListStore,
}
