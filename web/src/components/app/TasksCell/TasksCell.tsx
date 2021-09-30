import type { TasksQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import TaskList from '../planner/TaskList/TaskList'

export const QUERY = gql`
  query TasksQuery {
    tasks {
      id
      title
      details
      completed
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ tasks }: CellSuccessProps<TasksQuery>) => {
  return <TaskList tasks={tasks} />
}
