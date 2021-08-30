import AppNavBar from 'src/components/app/AppNavBar/AppNavBar'

const AppLayout = ({ children }) => {
  return (
    <div>
      <AppNavBar />
      {children}
    </div>
  )
}

export default AppLayout
