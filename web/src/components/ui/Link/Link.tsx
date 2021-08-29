import { Link as RRLink } from '@redwoodjs/router'
import clsx from 'clsx'

const Link: React.FC<{
  to: string
  className?: string
}> = ({ children, to, className }) => {
  return (
    <RRLink to={to} className={clsx('text-primary', className)}>
      {children}
    </RRLink>
  )
}

export default Link
