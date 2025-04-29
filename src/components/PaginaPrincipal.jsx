function PaginaPrincipal() {
  return (
    <div className="container-principal">
      <header class="header">
        <div class="logo-titulo">
        <img
            className="LogoInicio"
            src="/public/logotipo-doit.png"
            alt="Logo"
          />
         
          <h2 class="titulo">Hey Teacher</h2>
        </div>
        <div class="acciones">
          <a href="#" class="link">
            Nueva clase
          </a>
          <a href="#" class="link">
            Eliminar todas las clases
          </a>
          <div class="perfil">
            <span class="nombre">Andrés Tobón</span>
            <div class="avatar"></div>
            <a href="#" class="cerrar">
              Cerrar sesión
            </a>
          </div>
        </div>
      </header>

      <h3 class="subtitulo">Gestión de horarios maestros</h3>

      <main class="horarios">
        <div class="dias">
          <div class="dia">Lunes</div>
          <div class="dia">Martes</div>
          <div class="dia">Miércoles</div>
          <div class="dia">Jueves</div>
          <div class="dia">Viernes</div>
          <div class="dia">Sábado</div>
        </div>

        <div class="grid">
          <div class="card">
            <div class="card-header rojo">Aula 01</div>
            <div class="card-sub">Nivel B1 &nbsp; Grupo 02</div>
            <div class="card-hora">7:30 a.m a 9:30 a.m</div>
            <div class="card-contenido">
              Clase 1: Pasado continuo y comparación con el pasado simple
            </div>
            <div class="card-acciones">
              <a href="#">Modificar</a> <a href="#">Eliminar</a>
            </div>
          </div>
        </div>
      </main>

      <footer class="footer">© doit English Academy 2025</footer>
    </div>
  );
}

export default PaginaPrincipal;
