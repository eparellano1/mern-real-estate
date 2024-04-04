import { Link, useNavigate } from "react-router-dom"
import "./Login.scss"
import { useState } from "react"
import apiRequest from "../../lib/apiRequest"

const Login = () => {
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  
  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    const formData = new FormData(e.target)
    const username = formData.get("username")
    const password = formData.get("password")
    
    try {
      const response = await apiRequest.post("/auth/login", {
        username,
        password
      })
      localStorage.setItem("user", JSON.stringify(response.data))
      navigate("/")
    } catch (error) {
      setError(error.response.data.message)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="login">
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <h1>Welcome back!</h1>
          <input type="text" required minLength={3} maxLength={20} name="username" placeholder="Username"/>
          <input type="text" required name="password" placeholder="Password"/>
          <button disabled={isLoading}>Login</button>
          {error && <span>{error}</span>}
          <Link to="/register">Don{'\''}t have an account yet?</Link>
        </form>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  )
}

export default Login