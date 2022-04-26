import { observer } from 'mobx-react-lite'
import { useStores } from '../stores'

export default observer(() => {
  const { todoListStore } = useStores()
  const { todos, addTodo } = todoListStore

  const inputEl = useRef<HTMLInputElement>(null)

  const addTodoHandle = () => {
    const content = inputEl.current?.value
    if (content) {
      addTodo(content)
      inputEl.current!.value = ''
    }
  }
  return (
    <div>
      <div className="text-3xl pb-10">Todo List</div>
      <input
        ref={inputEl}
        placeholder="add a todo"
        type="text"
        className="px-4 py-2 w-250px text-center bg-transparent outline-none outline-active:none border border-rounded border-gray-200 border-dark:gray-700"
        onKeyDown={({ key }) => key === 'Enter' && addTodoHandle()}
      />
      <div>{JSON.stringify(todos)}</div>
    </div>
  )
})
