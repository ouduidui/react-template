import { makePersistable } from 'mobx-persist-store'

interface TodoType {
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
    this.todos.push({
      id: this.todos.length + 1,
      content,
      done: false,
      createAt: Date.now(),
    })
  }

  todoDone(id: number) {
    const todo = this.todos.find(todo => todo.id === id)
    if (todo)
      todo.done = true
  }
}

const todoListStore = new TodoListStore()

export {
  todoListStore,
}
