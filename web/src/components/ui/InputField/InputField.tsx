import clsx from 'clsx'
import { TextField, FieldError } from '@redwoodjs/forms'

const InputField: React.FC<{
  placeholder: string
  name?: string
  component?: any
  validation?: any
  className?: string
  required?: boolean
}> = ({ className, name, component = TextField, ...props }) => {
  const Comp = component

  const baseClass = clsx(
    'w-full py-1 px-1 border-b-2 border-primary outline-none focus:border-b-4 opacity-80 focus:px-0 focus:opacity-100 transition-all',
    className
  )

  return (
    <>
      <Comp
        name={name}
        className={baseClass}
        errorClassName={clsx(baseClass, 'ring-red-500 ring-2')}
        {...props}
      />
      <FieldError name={name} className="text-sm text-red-600" />
    </>
  )
}

export default InputField
