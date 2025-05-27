import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import {
  alertaError,
  alertaRedireccion,
  generaToken,
} from "../helpers/funciones";
import "./Login.css";

const apiUsuarios = "https://back-json-server-sabado.onrender.com/usuarios/";

function Login() {
  const [getUsuario, setUsuario] = useState("");
  const [getPassword, setPassword] = useState("");
  const [usuarios, setUsuarios] = useState([]);

  const redireccion = useNavigate();

  useEffect(() => {
    fetch(apiUsuarios)
      .then((res) => res.json())
      .then((data) => setUsuarios(data))
      .catch((error) => console.error("Error al obtener usuarios:", error));
  }, []);

  function iniciarSesion(e) {

    e.preventDefault();

    if (!getUsuario || !getPassword) {
    alertaError("Campos obligatorios", "Por favor, ingresa usuario y contraseña.", "Error");
    return;
  }
    // Validación de formato de usuario (sin espacios)
    const usuarioRegex = /^[^\s]+$/;
    if (!usuarioRegex.test(getUsuario)) {
      alertaError("Usuario inválido", "El usuario no debe contener espacios.", "Error");
      return;
    }
    // Validación de longitud de contraseña
    if (getPassword.length < 6) {
      alertaError("Contraseña débil", "La contraseña debe tener al menos 6 caracteres.", "Error");
      return;
    }
    
    const usuarioEncontrado = usuarios.find(
      (u) => u.usuario === getUsuario && u.password === getPassword
    );

    if (usuarioEncontrado) {
      const token = generaToken();
      localStorage.setItem("token", token);
      localStorage.setItem("usuario", usuarioEncontrado.usuario);
      localStorage.setItem("nombre", usuarioEncontrado.nombre); // opcional
      alertaRedireccion(
        "Bienvenido!, " + usuarioEncontrado.nombre,
        "/ContenidoPrincipal",
        true,
        1000
      );
    } else {
      alertaError("Error", "Usuario y/o contraseña incorrecta", "error");
    }
  }

  function PaginaRegistrate() {
    redireccion("/Registrate");
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
            ¿Aún no te has registrado?
            <label onClick={PaginaRegistrate} className="signup_tog">
              Regístrate
            </label>
          </span>
          <input
            onChange={(e) => setUsuario(e.target.value)}
            type="text"
            className="input"
            placeholder="Usuario"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
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
