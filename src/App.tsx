import "./index.css"
import {useNavigate} from "react-router-dom"
import Button from "./components/common/Button"

function App() {
  const navigate = useNavigate()
  function handleClick() {
    navigate("/home")
  }
  return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100" w-full h-full>
          <Button onClick={handleClick} className="bg-primary">
              Go to Dashboard
          </Button>
      </div>
  )
}

export default App