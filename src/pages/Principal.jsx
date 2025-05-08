
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { generaToken } from '../helpers/funciones';
import "./Principal.css";
import ContenidoPrincipal from "./ContenidoPrincipal";




function Principal() {
  let redireccion = useNavigate(); // Usamos useNavigate para redirigir

  // Función para iniciar sesión
  function iniciarSesion() {
    let token = generaToken();  // Generamos el token
    localStorage.setItem("token", token); // Guardamos el token en el localStorage

    // Redirigimos a la página de Login
    redireccion("/Login");  // Aquí solo usamos redireccion directamente
  }

  function PaginaRegistrate() {
    let token = generaToken(); // Generamos el token
    localStorage.setItem("token", token);

    redireccion("/Registrate");
    }

  return (
    <div className="hero">
      <div className="overlay-principal">
        <div className="logo">
          <img
            className="LogoInicio"
            src="/LOGO-01-Aprende-ingles-.png"
            alt="Logo"
          />
        </div>

        <div className="container-button">
          {/* Botón de iniciar sesión que llama a la función iniciarSesion */}
          <Button text={"Iniciar Sesión"} onClick={iniciarSesion} />
          <Button text={"Registrate"} onClick={PaginaRegistrate}/>
        </div>
      </div>
    </div>
  );
}

export default Principal;