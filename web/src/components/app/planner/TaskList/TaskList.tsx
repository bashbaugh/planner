import Task, { TaskData } from '../../Task/Task'
import { useState } from 'react'

const TaskList: React.FC<{
  tasks: TaskData[]
}> = ({ tasks: initialTasks }) => {
  const [expandedTask, setExpandedTask] = useState<string | null>()
  const [tasks, setTasks] = useState<Record<string, TaskData>>(
    Object.fromEntries(initialTasks.map((t) => [t.id, t]))
  )

  return (
    <div className="flex flex-col">
      {Object.entries(tasks).map(([tid, task]) => (
        <Task
          expanded={expandedTask === tid}
          key={tid}
          task={task}
          onExpandClick={() => setExpandedTask((t) => (t !== tid ? tid : null))}
          onUpdateTask={(t) => setTasks({ ...tasks, [tid]: { ...task, ...t } })}
        />
      ))}
    </div>
  )
}

export default TaskList
