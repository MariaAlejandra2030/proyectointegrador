import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NuevaClase from "../components/NuevaClase";
import "../components/NuevaClase.css";

function PaginaPrincipal({ setmostrarmodal }) {
  const navigate = useNavigate();
  const [clases, setClases] = useState([]);
  const [nombreUsuario, setNombreUsuario] = useState("");

  // Traae nombre del usuario cargar la página
  useEffect(() => {
    const nombreGuardado = localStorage.getItem("nombre");
    if (nombreGuardado) {
      setNombreUsuario(nombreGuardado);
    }
  }, []);

  const eliminarTodasLasClases = () => {
    setClases([]);
  };

  const cerrarSesion = (e) => {
    e.preventDefault();
    localStorage.removeItem("nombre");
    localStorage.removeItem("usuario");
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="container-principal">
      <header className="header">
        <div className="logo-titulo">
          <img
            className="LogoInicio"
            src="/public/logotipo-doit.png"
            alt="Logo"
          />
          <h2 className="titulo">Hey Teacher 👋 {nombreUsuario}</h2>
        </div>

        <div className="acciones">
          <a
            href="#"
            className="link"
            onClick={(e) => {
              e.preventDefault();
              setmostrarmodal(true);
            }}
          >
            Nueva clase
          </a>

          <a
            href="#"
            className="link"
            onClick={(e) => {
              e.preventDefault();
              eliminarTodasLasClases();
            }}
          >
            Eliminar todas las clases
          </a>

          <div className="perfil">
            <div className="avatar"></div>
            <span className="nombre-usuario">{nombreUsuario}</span>
            <a href="#" className="cerrar" onClick={cerrarSesion}>
              Cerrar sesión
            </a>
          </div>
        </div>
      </header>

      <h3 className="subtitulo">Gestión de horarios maestros</h3>

      <main className="horarios">
        <div className="dias">
          <div className="dia">Lunes</div>
          <div className="dia">Martes</div>
          <div className="dia">Miércoles</div>
          <div className="dia">Jueves</div>
          <div className="dia">Viernes</div>
          <div className="dia">Sábado</div>
        </div>
      </main>
    </div>
  );
}

export default PaginaPrincipal;
