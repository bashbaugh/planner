import AppNavBar from 'src/components/app/AppNavBar/AppNavBar'

const AppLayout = ({ children }) => {
  return (
    <div className="flex flex-col h-screen">
      <AppNavBar />
      {children}
    </div>
  )
}

export default AppLayout
