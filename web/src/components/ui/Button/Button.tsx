import clsx from 'clsx'

const Button: React.FC = ({ children }) => {
  return (
    <button
      className={clsx(
        'py-2 px-5 bg-primary text-white rounded-md font-bold hover:bg-opacity-90 transition focus:ring-4'
      )}
    >
      {children}
    </button>
  )
}

export default Button
