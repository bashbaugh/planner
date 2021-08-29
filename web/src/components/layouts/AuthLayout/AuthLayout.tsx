// import backgroundImage from './blobSceneLight.svg'

const AuthLayout: React.FC = ({ children }) => {
  return (
    <>
      <div
        className="bg-cover min-h-screen min-w-screen flex items-center justify-center"
        style={{
          backgroundImage: `url("/asset/blobSceneLight.svg")`,
        }}
      >
        <main className="max-w-md w-full p-6 bg-white rounded-xl shadow-xl drop-shadow-xl">
          {children}
        </main>
      </div>
    </>
  )
}

export default AuthLayout
