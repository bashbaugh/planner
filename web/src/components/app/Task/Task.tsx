import clsx from 'clsx'
import { FiChevronDown } from 'react-icons/fi'
import { useRef } from 'react'
import { details } from './Task.stories'
import ReactMarkdown from 'react-markdown'

export interface TaskData {
  id: string
  title: string
  details?: string
  completed: boolean
}

const Task: React.FC<{
  task: TaskData
  onExpandClick: () => void
  onUpdateTask: (task: Partial<TaskData>) => void
  expanded: boolean
}> = ({ task, expanded, onExpandClick, onUpdateTask }) => {
  const detailsTextRef = useRef<HTMLTextAreaElement>()
  const onTextareaInputOrFocus = (e) => {
    const el = e.target as HTMLTextAreaElement
    el.style.height = `${el.scrollHeight}px`
  }
  const DetailsTextComponent = (props) =>
    expanded ? (
      <textarea
        ref={detailsTextRef}
        onClick={(e) => e.stopPropagation()}
        onKeyDown={(e) => {
          if (!e.metaKey && !e.ctrlKey) e.stopPropagation()
        }}
        onInput={onTextareaInputOrFocus}
        onFocus={onTextareaInputOrFocus}
        placeholder="Details..."
        defaultValue={task.details}
        {...props}
      />
    ) : (
      // This is a draft feature of CSS that may be dropped. TODO do this a different way
      <ReactMarkdown {...props}>{task.details}</ReactMarkdown>
    )

  const titleTextRef = useRef<HTMLInputElement>()
  const TitleTextComponent = () =>
    expanded ? (
      <input
        ref={titleTextRef}
        onClick={(e) => e.stopPropagation()}
        placeholder="Title"
        className="w-full outline-none"
        defaultValue={task.title}
        autoFocus
      />
    ) : (
      // This is a draft feature of CSS that may be dropped. TODO do this a different way
      <div>{task.title}</div>
    )

  const changeExpandedState = () => {
    if (expanded) {
      // collapsing
      // Update task details
      onUpdateTask({
        details: detailsTextRef.current.value,
        title: titleTextRef.current.value || task.title,
      })
    }
    onExpandClick()
  }

  return (
    <div
      className={clsx(
        'px-1 mx-2 flex gap-3 relative group transition-all cursor-pointer rounded-lg outline-none',
        expanded ? 'py-4 py-2' : 'py-2 hover:bg-gray-50 focus:ring-4'
      )}
      onClick={() => changeExpandedState()}
      onKeyDown={(e) => {
        if (e.key === 'Enter') changeExpandedState()
      }}
      role="button"
      tabIndex={0}
    >
      <div
        className={clsx(
          'z-[-1] absolute top-0 h-full -left-2 -right-2 bg-white rounded-2xl drop-shadow-2xl transition-all',
          expanded ? 'opacity-100 group-focus:ring-4' : 'opacity-0'
        )}
      />
      {/* {task.completed && (
        <div className="absolute left-0 w-full top-1/2 h-[2px] bg-black" />
      )} */}
      <button
        className="w-5 h-5 mt-[3px] rounded-full bg-white border-2 border-task hover:bg-task hover:bg-opacity-20"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={(e) => e.stopPropagation()}
      />
      <div className="pt-[2px] flex-grow">
        <TitleTextComponent />
        <DetailsTextComponent
          className={clsx(
            'text-muted w-full resize-none outline-none',
            expanded ? 'text-sm' : 'text-xs'
          )}
        />
      </div>

      <div className="absolute right-2 top-0 h-full flex items-center opacity-0 group-hover:opacity-100 transition-all">
        <button
          className="rounded-md bg-white bg-opacity-80"
          onClick={(e) => {
            e.stopPropagation()
            changeExpandedState()
          }}
          tabIndex={-1}
        >
          <FiChevronDown
            size={25}
            className={clsx(
              'transform transition-transform',
              expanded && 'rotate-180'
            )}
          />
        </button>
      </div>
    </div>
  )
}

export default Task
