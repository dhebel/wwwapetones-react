import { Route, Switch } from 'react-router-dom';
import Navegacion from './Navegacion.js';
import Encuesta from './Encuesta.js';
import Mantenedor from './Mantenedor.js';
import './App.css';

function App() {
  return (
    <>
      <Navegacion/>
      <Switch>
        <Route exact path='/' component={Encuesta}/>
        <Route path='/mantenedor' component={Mantenedor}/>
      </Switch>
    </>
  );
}

export default App;
