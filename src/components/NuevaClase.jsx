import { useState } from 'react';

function NuevaClase(props) {
  // Extrae las funciones desde props
  const { cerrar, setListaClases } = props;

  const [dia, setDia] = useState("Lunes");
  const [aula, setAula] = useState("");
  const [horaInicio, setHoraInicio] = useState("");
  const [horaFinal, setHoraFinal] = useState("");
  const [nivel, setNivel] = useState("Nivel A1");
  const [grupo, setGrupo] = useState("Grupo 01");
  const [clase, setClase] = useState("Clase 1 Pasado continuo y comparativos");

  const manejarAgregar = () => {
    const nuevaClase = {
      dia,
      aula,
      horaInicio,
      horaFinal,
      nivel,
      grupo,
      clase,
    };

    // Agrega la nueva clase a la lista
    setListaClases(prev => [nuevaClase, ...prev]);
    cerrar(false); // cierra el modal
  };

  return (
    <div>
      <div className="modal">
        <h2>Nueva clase</h2>

        <label htmlFor="dia">Seleccione el día</label>
        <select id="dia" value={dia} onChange={(e) => setDia(e.target.value)}>
          <option>Lunes</option>
          <option>Martes</option>
          <option>Miércoles</option>
          <option>Jueves</option>
          <option>Viernes</option>
        </select>

        <label htmlFor="aula">Seleccione aula</label>
        <input type="text" id="aula" value={aula} onChange={(e) => setAula(e.target.value)} placeholder="Aula 01" />

        <label>Horario</label>
        <div className="time-container">
          <input type="time" id="hora-inicio" value={horaInicio} onChange={(e) => setHoraInicio(e.target.value)} />
          <input type="time" id="hora-final" value={horaFinal} onChange={(e) => setHoraFinal(e.target.value)} />
        </div>

        <label htmlFor="nivel">Seleccione nivel</label>
        <select id="nivel" value={nivel} onChange={(e) => setNivel(e.target.value)}>
          <option>Nivel A1</option>
          <option>Nivel A2</option>
          <option>Nivel B1</option>
        </select>

        <label htmlFor="grupo">Selecciona grupo</label>
        <select id="grupo" value={grupo} onChange={(e) => setGrupo(e.target.value)}>
          <option>Grupo 01</option>
          <option>Grupo 02</option>
        </select>

        <label htmlFor="clase">Selecciona la clase</label>
        <select id="clase" value={clase} onChange={(e) => setClase(e.target.value)}>
          <option>Clase 1 Pasado continuo y comparativos</option>
        </select>

        <button onClick={manejarAgregar}>Agregar</button>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            cerrar(false);
          }}
        >
          Cancelar
        </a>
      </div>
    </div>
  );
}

export default NuevaClase;