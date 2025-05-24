import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../components/NuevaClase.css";
import Cuadros from "../components/Cuadros";

function PaginaPrincipal({ setmostrarmodal, setListaClases, listaclases, setMostrarModalEliminar }) {
  const navigate = useNavigate();

  const [nombreUsuario, setNombreUsuario] = useState("");

  useEffect(() => {
    const nombreGuardado = localStorage.getItem("nombre");
    if (nombreGuardado) {
      setNombreUsuario(nombreGuardado);
    }
  }, []);

  const eliminarTodasLasClases = () => {
    setListaClases([]);
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
      {["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"].map(
        (dia) => (
          <div className="dia" key={dia}>
            <div className="estilo-dia">{dia}</div>
            {/* Mostrar clases filtradas por día */}
            {listaclases
              .filter((clase) => clase.dia === dia)
              .map((item, index) => (
                <Cuadros
                  key={index}
                  dia={item.dia}
                  aula={item.aula}
                  horaInicio={item.horaInicio}
                  horaFinal={item.horaFinal}
                  nivel={item.nivel}
                  grupo={item.grupo}
                  clase={item.clase}
                  setmostrarmodaleliminar={setMostrarModalEliminar}
                />
              ))}
          </div>
        )
      )}
        </div>
      </main>
    </div>
  );
}

export default PaginaPrincipal;
