import type { TodoType } from '../stores/todolist'

interface PropsType {
  todo: TodoType
  doneHandle: (id: number) => void
}

export default observer(({ todo, doneHandle }: PropsType) => {
  const { id, done, content } = todo
  return (
    <div className={`mb-3 px-4 py-2 w-300px border border-gray-200 border-dark:gray-700 bg-transparent flex items-center hover:shadow-sm ${done ? 'opacity-50' : ''}`}>
      <div onClick={() => doneHandle(id)} className={`cursor-pointer mr-3 ${done ? 'i-carbon-checkbox-checked' : 'i-carbon-checkbox'}`} />
      <div>{content}</div>
    </div>
  )
})
