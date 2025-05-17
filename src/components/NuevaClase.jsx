function NuevaClase({cerrar}){
   
   return (
<div>
  <div class="modal">
    <h2>Nueva clase</h2>

    <label for="dia">Seleccione el día</label>
    <select id="dia">
      <option>Lunes</option>
      <option>Martes</option>
      <option>Miércoles</option>
      <option>Jueves</option>
      <option>Viernes</option>
    </select>

    <label for="aula">Seleccione aula</label>
    <input type="text" id="aula" placeholder="Aula 01"></input>

    <label>Horario</label>
    <div class="time-container">
      <input type="time" id="hora-inicio"></input>
      <input type="time" id="hora-final"></input>
    </div>

    <label for="nivel">Seleccione nivel</label>
    <select id="nivel">
      <option>Nivel A1</option>
      <option>Nivel A2</option>
      <option>Nivel B1</option>
    </select>

    <label for="grupo">Selecciona grupo</label>
    <select id="grupo">
      <option>Grupo 01</option>
      <option>Grupo 02</option>
    </select>

    <label for="clase">Selecciona la clase</label>
    <select id="clase">
      <option>Clase 1 Pasado continuo y comparativos</option>
    </select>

    <button>Agregar</button>
    <a href="#" onClick={(e) => { e.preventDefault(); cerrar(false); 
      console.log("cerrar nueva clase")
    }}>
        Cancelar
      </a>
  </div>
  </div>

   )
}

export default NuevaClase
