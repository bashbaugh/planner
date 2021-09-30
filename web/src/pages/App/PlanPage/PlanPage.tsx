import { MetaTags } from '@redwoodjs/web'
import { ReflexContainer, ReflexElement, ReflexSplitter } from 'react-reflex'
import TaskList from 'src/components/app/planner/TaskList/TaskList'
import 'src/styles/reflex.css'

const PlanPage = () => {
  return (
    <>
      <MetaTags title="Plan" description="Planly Planner" />
      <ReflexContainer orientation="vertical" className="w-full h-full">
        <ReflexElement>
          <div>
            <TaskList tasks={[]} />
          </div>
        </ReflexElement>
        <ReflexSplitter className="w-2" />
        <ReflexElement>
          <div></div>
        </ReflexElement>
      </ReflexContainer>
    </>
  )
}

export default PlanPage
