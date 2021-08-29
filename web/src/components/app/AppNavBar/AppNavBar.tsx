import clsx from 'clsx'
import { FiStar, FiCalendar } from 'react-icons/fi'
import { NavLink, routes } from '@redwoodjs/router'

const baseTabClass =
  'w-14 h-full bg-opacity-10 flex flex-col gap-1 items-center justify-center font-bold text-muted hover:text-gray-700'

const AppNavBar: React.FC = () => {
  return (
    <div className="w-full h-16 flex border-b-1 border-gray-300 shadow-xl items-center">
      <div className="mx-3 w-11 h-11 rounded-full bg-gray-300 cursor-pointer" />
      <NavLink
        to={routes.today()}
        className={clsx(baseTabClass)}
        activeClassName={clsx(
          baseTabClass,
          'bg-apptab-today !text-apptab-today'
        )}
      >
        <FiStar size={20} strokeWidth={3} />
        <div className="text-sm">Today</div>
      </NavLink>
      <NavLink
        to={routes.plan()}
        className={clsx(baseTabClass)}
        activeClassName={clsx(baseTabClass, 'bg-apptab-plan !text-apptab-plan')}
      >
        <FiCalendar size={20} strokeWidth={3} />
        <div className="text-sm">Plan</div>
      </NavLink>
      <div className="ml-auto mr-4 w-11 h-11 rounded-full bg-blue-600 cursor-pointer"></div>
    </div>
  )
}

export default AppNavBar
