import { nanoid } from 'nanoid'
import { TaskData } from '../../Task/Task'
import TaskList from './TaskList'

const list: TaskData[] = [
  {
    id: nanoid(),
    title: 'Wash the dishes',
  },
  {
    id: nanoid(),
    title: 'Eat some ice cream',
    details: 'This is an _extremely_ important task.',
  },
]

export const basic = () => {
  return (
    <div className="max-w-md">
      <TaskList tasks={list} />
    </div>
  )
}

export default { title: 'Components/TaskList' }
