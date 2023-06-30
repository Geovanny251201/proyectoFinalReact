
import './App.css';
import {Route, BrowserRouter as Router } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import Menu from './Plantilla/Menu';
import Inicio from './Inicio/Inicio';
import ListarCurso from './ListaCurso/ListarCurso';
import CrearCurso from './ListaCurso/CrearCurso';
import ListarEstudiantes from './Estudiantes/ListarEstudiantte';
import CrearEstudiante from './Estudiantes/CrearEstudiante';
import CrearProfesor from './ListaProfesores/CrearProfesor';
import ListarProfesor from './ListaProfesores/ListarProfesor';
import CrearGrupo from './Grupos/CrearGrupo';
import ListarGrupos from './Grupos/ListarGrupos';
import { Footer } from './Plantilla/Footer';


function App() {
  return (
    <div className="App">
      <Menu></Menu>
      <body>
        <Router>
        <Route exact path="/" component={Inicio}></Route>
        <Route path="/ListarCurso" component={ListarCurso}></Route>
        <Route path="/CrearCurso" component={CrearCurso}></Route>

        <Route path="/ListarEstudiantes" component={ListarEstudiantes}></Route>
        <Route path="/CrearEstudiante" component={CrearEstudiante}></Route>

        <Route path="/ListarProfesor" component={ListarProfesor}></Route>
        <Route path="/CrearProfesor" component={CrearProfesor}></Route>

        <Route path="/ListarGrupos" component={ListarGrupos}></Route>
        <Route path="/CrearGrupo" component={CrearGrupo}></Route>
        <Route></Route> 

        </Router>
      </body>
     
      <Footer></Footer>
    </div>
  );
}

export default App;
