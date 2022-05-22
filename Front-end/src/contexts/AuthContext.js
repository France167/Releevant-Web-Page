import { createContext, useState, useContext, useEffect } from "react";
import { useNavigate , useLocation} from "react-router-dom";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";

const AuthContext = createContext({
  auth: {},
  login: () => {},
  logout: () => {},
  errorMessage: "",
});

export const useAuthContext = () => {
  return useContext(AuthContext);
};

export default function AuthContextProvider({ children }) {
  const [auth, setAuth] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const location = useLocation();
  let navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  function logout() {
    setAuth(null);
    window.localStorage.removeItem("loggedIn");
    setErrorMessage("");
    navigate("/inicio");
  }

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("loggedIn");
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      setAuth(user);
    }
  }, []);

  async function fetchApi(user) {
    let response = await fetch("http://localhost:3001/login", {
      mode: "cors",
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: user.email,
        password: user.password,
      }),
    });
    let json = await response.json();
    console.log(json);
    if(response.status === 200){
      window.localStorage.setItem("loggedIn", JSON.stringify(json));
      setAuth(json);
    } else {
       setErrorMessage("Error a introducir credenciales!!"); 
     /*  Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Error a introducir credenciales!!',
      }) */
    }
   
  }

  async function login(user) {
    await fetchApi(user); 
      /* navigate(from, { replace: true });  */
  }

  const value = {
    auth,
    login,
    errorMessage,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
