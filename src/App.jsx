import './App.css'
import Boton from './components/Boton';
import Contador from './components/Contador';
import { manejarClic, manejarClic10, reiniciarContador} from './components/functions';
import { useState } from 'react';

function App() {

  const [numClics, setNumClics] = useState(0);

  return (
    <>
      <div className='App'>
        <div className='freecodecamp-logo-contenedor'>
          <img 
            src= {'img/freecodecamp-logo.png'}
            alt="Logo de freecodecamp" 
            className="freecodecamp-logo" />
        </div>
        <div className="contenedor-principal">
          <Contador
            numClics={numClics}
          />
          <Boton
            texto = "Clic"
            esBotonDeClic = {true}
            manejarClic={() => manejarClic(numClics, setNumClics)}
          />
          <Boton
            texto = "Clic + 10"
            esBotonDeClic = {true}
            manejarClic = {() => manejarClic10(numClics, setNumClics)}
          />
          <Boton
            texto = "Reiniciar"
            esBotonDeClic = {false}
            manejarClic = {()=> reiniciarContador(setNumClics)}
          />
        </div>
      </div>
    </>
  )
}

export default App
