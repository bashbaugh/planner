import Task, { TaskData } from './Task'

export const simple = () => {
  return (
    <Task
      task={{
        name: 'Do the dishes',
      }}
    />
  )
}

export const completed = () => {
  return (
    <Task
      task={{
        name: 'Complete a task',
        completed: true,
      }}
    />
  )
}

export default { title: 'Components/Task' }
