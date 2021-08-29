// import backgroundImage from './blobSceneLight.svg'

const AuthLayout: React.FC = ({ children }) => {
  return (
    <>
      {/* <svg
        id="visual"
        viewBox="0 0 900 600"
        width="900"
        height="600"
        xmlns="http://www.w3.org/2000/svg"
        // xmlns:xlink="http://www.w3.org/1999/xlink"
        version="1.1"
        className="fixed w-screen h-screen"
      >
        <rect x="0" y="0" width="900" height="600" fill="#ffffff"></rect>
        <defs>
          <linearGradient id="grad1_0" x1="33.3%" y1="0%" x2="100%" y2="100%">
            <stop offset="20%" stopColor="#3c98fa" stopOpacity="1"></stop>
            <stop offset="80%" stopColor="#3c98fa" stopOpacity="1"></stop>
          </linearGradient>
        </defs>
        <defs>
          <linearGradient id="grad1_1" x1="33.3%" y1="0%" x2="100%" y2="100%">
            <stop offset="20%" stopColor="#3c98fa" stopOpacity="1"></stop>
            <stop offset="80%" stopColor="#ffffff" stopOpacity="1"></stop>
          </linearGradient>
        </defs>
        <defs>
          <linearGradient id="grad2_0" x1="0%" y1="0%" x2="66.7%" y2="100%">
            <stop offset="20%" stopColor="#3c98fa" stopOpacity="1"></stop>
            <stop offset="80%" stopColor="#3c98fa" stopOpacity="1"></stop>
          </linearGradient>
        </defs>
        <defs>
          <linearGradient id="grad2_1" x1="0%" y1="0%" x2="66.7%" y2="100%">
            <stop offset="20%" stopColor="#ffffff" stopOpacity="1"></stop>
            <stop offset="80%" stopColor="#3c98fa" stopOpacity="1"></stop>
          </linearGradient>
        </defs>
        <g transform="translate(900, 0)">
          <path
            d="M0 432.7C-61 431 -121.9 429.4 -165.6 399.7C-209.2 370 -235.5 312.2 -268.7 268.7C-301.9 225.2 -342 195.9 -370.5 153.5C-399 111 -415.8 55.5 -432.7 0L0 0Z"
            fill="#b0cafe"
          ></path>
          <path
            d="M0 216.3C-30.5 215.5 -61 214.7 -82.8 199.9C-104.6 185 -117.8 156.1 -134.4 134.4C-150.9 112.6 -171 97.9 -185.2 76.7C-199.5 55.5 -207.9 27.8 -216.3 0L0 0Z"
            fill="#3c98fa"
          ></path>
        </g>
        <g transform="translate(0, 600)">
          <path
            d="M0 -432.7C54.9 -410.2 109.7 -387.8 147 -354.8C184.2 -321.8 203.7 -278.2 248.9 -248.9C294.1 -219.6 364.8 -204.7 399.7 -165.6C434.6 -126.5 433.6 -63.2 432.7 0L0 0Z"
            fill="#b0cafe"
          ></path>
          <path
            d="M0 -216.3C27.4 -205.1 54.9 -193.9 73.5 -177.4C92.1 -160.9 101.9 -139.1 124.5 -124.5C147 -109.8 182.4 -102.3 199.9 -82.8C217.3 -63.2 216.8 -31.6 216.3 0L0 0Z"
            fill="#3c98fa"
          ></path>
        </g>
      </svg> */}
      <div
        className="bg-cover min-h-screen"
        style={{
          backgroundImage: `url("/blobSceneLight.svg")`,
        }}
      >
        aaa
        {children}
      </div>
    </>
  )
}

export default AuthLayout
