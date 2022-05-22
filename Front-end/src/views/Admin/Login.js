import { useState, useRef } from "react";
import { useAuthContext } from "../../contexts/AuthContext";
import { useNavigate, useLocation } from "react-router-dom";
import "../../App.css";

function Login() {
  const { login, errorMessage } = useAuthContext();
  const location = useLocation();
  const navigate = useNavigate();
  const userRef = useRef();

  const from = location.state?.from?.pathname || "/";

  const [user, setUser] = useState({
    email: "",
    password: "",
    token: "",
  });

  function handleInputs(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    await login(user);
    /* setUser({ email: "", password: "", token: "" }); */
    navigate(from, { replace: true }); 
   
  }

  return (
    <div className="foto-container">
      <div className="form-box">
        <h2 className="form-h2">Welcome to Releevant</h2>
        <form onSubmit={handleSubmit}>
          <div className="user-box">
            <input
              autoComplete="off"
              onChange={handleInputs}
              type="email"
              name="email"
              value={user.email}
              required
            />
            <label name="name">Email</label>
          </div>
          <div className="user-box">
            <input
              autoComplete="off"
              onChange={handleInputs}
              type="password"
              name="password"
              value={user.password}
              required
            />
            <label name="surname">Password</label>
          </div>
          <div className="info">
            <p className="error text-center mt-5">{errorMessage}</p>
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
