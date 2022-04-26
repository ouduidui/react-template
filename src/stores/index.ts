import { configure } from 'mobx'
import { todoListStore } from './todolist'

configure({ enforceActions: 'always' })

export const useStores = () => useContext(createContext({
  todoListStore,
}))
