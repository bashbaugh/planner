import clsx from 'clsx'

const Heading: React.FC<{
  as?: string
}> = ({ as: asComp = 'h2', children }) => {
  const HComponent = asComp as any
  return (
    <HComponent className={clsx('text-2xl font-bold')}>{children}</HComponent>
  )
}

export default Heading
