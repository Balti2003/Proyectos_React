import { useState } from 'react';
import './App.css'
import Boton from './components/Boton/Boton';
import BotonClear from './components/Boton/BotonClear';
import Pantalla from './components/Pantalla/Pantalla';
import { evaluate } from 'mathjs';

function App() {
  const [input, setInput] = useState('');

  const agregarInput = (valor: string) => {
      setInput(input + valor);
  };

  const calcularResultado = () => {
    try {
      const resultado = evaluate(input);
      setInput(isFinite(resultado) ? resultado.toString() : "Error");
    } catch {
      setInput("Error");
    }
  };

  return (
    <div className="App">
      <h1>Calculadora Interactiva</h1>
      <div className="contenedor-principal">
        <Pantalla input={input}></Pantalla>

        <div className='fila'>
          <Boton manejarClick={agregarInput}>1</Boton>
          <Boton manejarClick={agregarInput}>2</Boton>
          <Boton manejarClick={agregarInput}>3</Boton>
          <Boton manejarClick={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={agregarInput}>4</Boton>
          <Boton manejarClick={agregarInput}>5</Boton>
          <Boton manejarClick={agregarInput}>6</Boton>
          <Boton manejarClick={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={agregarInput}>7</Boton>
          <Boton manejarClick={agregarInput}>8</Boton>
          <Boton manejarClick={agregarInput}>9</Boton>
          <Boton manejarClick={agregarInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={calcularResultado}>=</Boton>
          <Boton manejarClick={agregarInput}>0</Boton>
          <Boton manejarClick={agregarInput}>.</Boton>
          <Boton manejarClick={agregarInput}>/</Boton>
        </div>
        <div className="fila">
          <BotonClear manejarClick={() => setInput('')}>Clear</BotonClear>
        </div>
      </div>
    </div>
  );  
}

export default App
