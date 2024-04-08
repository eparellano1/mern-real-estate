import { useContext, useState } from "react";
import "./ProfileUpdatePage.scss";
import { AuthContext } from "../../context/AuthContext";
import apiRequest from "../../lib/apiRequest";
import { useNavigate } from "react-router-dom"

const ProfileUpdatePage = () => {
  const [error, setError] = useState("")
  const { currentUser, updateUser } = useContext(AuthContext)

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)

    const { username, email, password } = Object.fromEntries(formData)

    try {
      const response = await apiRequest.put(`/users/${currentUser.id}`, {
        username, email, password
      })

      updateUser(response.data)
      navigate("/profile")
    } catch (error) {
      console.log(error)
      setError(error.response.data.message)
    }
  }

  return (
    <div className="profileUpdatePage">
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <h1>Update Profile</h1>
          <div className="item">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" defaultValue={currentUser.username}/>
          </div>
          <div className="item">
            <label htmlFor="email">Email</label>
            <input type="text" id="email" name="email" defaultValue={currentUser.email}/> 
          </div>
          <div className="item">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" /> 
          </div>
          <button>Update</button>
          {error && {}}
        </form>
      </div>
      <div className="sideContainer">
        <img src={currentUser.avatar || "/noavatar.jpg"} alt="" className="avatar" />
      </div>
    </div>
  );
};

export default ProfileUpdatePage;
