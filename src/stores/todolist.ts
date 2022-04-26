class TodoListStore {
  count = 0

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true })
  }

  increment() {
    this.count++
  }
}

const todoListStore = new TodoListStore()

export {
  todoListStore,
}
