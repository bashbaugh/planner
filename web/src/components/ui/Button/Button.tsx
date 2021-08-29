import clsx from 'clsx'
import { Submit } from '@redwoodjs/forms'

const Button: React.FC<{
  submit?: boolean
}> = ({ submit, children }) => {
  const Comp = submit ? Submit : 'button'
  return (
    <Comp
      className={clsx(
        'py-2 px-6 bg-primary text-white rounded-md font-bold hover:bg-opacity-90 transition outline-none focus:ring-4'
      )}
    >
      {children}
    </Comp>
  )
}

export default Button
