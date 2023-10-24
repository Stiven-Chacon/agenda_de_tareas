import './App.css';
import ListaDeTareas from './componentes/ListaDeTareas';
import logo from './img/logo.png';

function App() {
  return (
    <div className='aplicacion-tareas'>
        <div className='logo-contenedor'>
          <img className='logo' src={logo} alt='Logo Curso' />
        </div>

        <div className='tareas-lista-principal'>
            <h1>Mis Tareas</h1>
            <ListaDeTareas/>
        </div>
    </div>
  );
}

export default App;
