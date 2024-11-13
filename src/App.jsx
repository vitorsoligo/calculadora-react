import { useState } from "react";
import './App.css';

function App() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [resultado, setResultado] = useState(0); // Corrigido aqui

  const soma = () => {
    let somaAll = Number(num1) + Number(num2);
    setResultado(somaAll);
  }

  const minus = () => {
    let minusAll = Number(num1) - Number(num2);
    setResultado(minusAll);
  }

  const div = () => {
    let minusAll = Number(num1) / Number(num2);
    setResultado(minusAll);
  }

  const mult = () => {
    let minusAll = Number(num1) * Number(num2);
    setResultado(minusAll);
  }

  return (
    <>
      <h1>Calculadora Lua</h1>
      <div className="card">
        <input type="number" name='num1' value={num1} onChange={(e) => setNum1(e.target.value)} /> <br /><br />
        <input type="number" name='num2' value={num2} onChange={(e) => setNum2(e.target.value)} /> <br /><br />
        <button onClick={soma}>
          Soma
        </button> &nbsp;
        <button onClick={minus}>
          Subtração
        </button> <br /> <br />
        <button onClick={div}>
          Divisão  
        </button> &nbsp;
        <button onClick={mult}>
          Multiplicação
        </button>
        <p>{resultado}</p>
        <p>Resultado</p>
      </div>
    </>
  );
}

export default App;