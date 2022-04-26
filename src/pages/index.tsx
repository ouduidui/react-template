import { observer } from 'mobx-react-lite'
import { useStores } from '../stores'

export default observer(() => {
  const { todoListStore } = useStores()
  const { count, increment } = todoListStore
  return (
    <div onClick={() => increment()}>{count}</div>
  )
})
