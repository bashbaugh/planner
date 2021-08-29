import { useState } from 'react'
import Task, { TaskData } from './Task'

const TaskS: typeof Task = (props) => {
  const [expanded, setExpanded] = useState(false)
  const [task, setTask] = useState(props.task)

  return (
    <div className="max-w-sm">
      <Task
        {...props}
        task={task}
        expanded={expanded}
        onExpandClick={() => setExpanded((e) => !e)}
        onUpdateTask={(n) => setTask((t) => ({ ...t, ...n }))}
      />
    </div>
  )
}

export const simple = () => {
  return (
    <TaskS
      task={{
        title: 'Do the dishes',
      }}
    />
  )
}

export const details = () => {
  return (
    <TaskS
      task={{
        title: 'Finish the MVP',
        details: 'Supports **markdown**! _cool_.',
      }}
    />
  )
}

export const completed = () => {
  return (
    <TaskS
      task={{
        title: 'Complete a task',
        completed: true,
      }}
    />
  )
}

export default { title: 'Components/Task' }
