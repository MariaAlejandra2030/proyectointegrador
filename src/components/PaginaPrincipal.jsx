import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NuevaClase from "../components/NuevaClase";
import "../components/NuevaClase.css";

function PaginaPrincipal() {
  const navigate = useNavigate();
  const [clases, setClases] = useState([]);
  const [nombreUsuario, setNombreUsuario] = useState("");
  const [mostrarModal, setMostrarModal] = useState(false);

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

  const agregarClase = (nuevaClase) => {
    setClases([...clases, nuevaClase]);
    setMostrarModal(false); // Cierra el modal después de agregar
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
              setMostrarModal(true);
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
          {["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"].map((dia) => (
            <div className="dia" key={dia}>
              <h4>{dia}</h4>
              {clases
                .filter((clase) => clase.dia === dia)
                .map((clase, index) => (
                  <div key={index} className="clase-card">
                    <strong>{clase.aula}</strong><br />
                    {clase.nivel} - {clase.grupo}<br />
                    {clase.horaInicio} a {clase.horaFinal}<br />
                    {clase.clase}
                  </div>
                ))}
            </div>
          ))}
        </div>
      </main>

      {mostrarModal && (
        <NuevaClase
          cerrar={setMostrarModal}
          onAgregarClase={agregarClase}
        />
      )}

    </div>

    
  );
}

export default PaginaPrincipal;
