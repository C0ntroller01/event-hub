import "./index.css"
import {useNavigate} from "react-router-dom"

function App() {
  const navigate = useNavigate()
  function handleClick() {
    navigate("/home")
  }
  return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100" w-full h-full>
          <button onClick={handleClick} className="bg-blue-500 text-white px-4 py-2 rounded hover:cursor-pointer">
              Go to Dashboard
          </button>
      </div>
  )
}

export default App