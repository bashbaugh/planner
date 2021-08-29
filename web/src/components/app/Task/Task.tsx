export interface TaskData {
  id: string
  name: string
  details: string
  completed: boolean
}

const Task: React.FC<{
  task: TaskData
}> = ({ task }) => {
  return (
    <div className="my-2 px-1 inline-flex gap-3 items-center relative">
      {/* {task.completed && (
        <div className="absolute left-0 w-full top-1/2 h-[2px] bg-black" />
      )} */}
      <button className="w-5 h-5 rounded-full bg-white border-2 border-task hover:bg-task hover:bg-opacity-20" />
      <div className=" pt-[2px]">{task.name}</div>
    </div>
  )
}

export default Task
