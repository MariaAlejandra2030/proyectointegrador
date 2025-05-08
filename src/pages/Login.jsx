import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import {
  alertaError,
  alertaRedireccion,
  generaToken,
} from "../helpers/funciones";
import "./Login.css";
function Login() {
  const [getUsuario, setUsuario] = useState("");
  const [getPassword, setPassword] = useState("");
  const [getName, setName] = useState("")
  const [getEmail, setEmail] = useState("")
  let redireccion = useNavigate();

  function iniciarSesion() {
    if (getUsuario === "admin" && getPassword === "admin") {
      let token = generaToken();
      localStorage.setItem("token", token);
      localStorage.setItem("usuario", getUsuario);
      alertaRedireccion("Bienvenido " + getUsuario, "/home", redireccion);
    } else {
      alertaError("error", "usuario y/o contraseña incorrecta", "error");
    }
  }


  function PaginaRegistrate() {
 
     // Redirigimos a la página de Login
     redireccion("/Registrate");  // Aquí solo usamos redireccion directamente
   }


  return (
    <div className="container">
      <input id="signup_toggle" type="checkbox" />
      <form className="form">
        <div className="form_front">
          <img
            className="LogoInicio"
            src="/public/01 Welcome-to-Doit.png"
            alt="Logo"
          />
          <div className="form_details">Login</div>
          <span className="switch">
            ¿Aún no te has regístrado?
            <label onClick={PaginaRegistrate} className="signup_tog">
              Regístrate
            </label>
          </span>
          <input
            onChange={(e) => setUsuario(e.target.value)}
            type="text"
            className="input"
            placeholder="Email"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="text"
            className="input"
            placeholder="Password"
          />
          <Button text={"Iniciar Sesión"} onClick={iniciarSesion} />
        </div>
      </form>
    </div>
  );
}

export default Login;
