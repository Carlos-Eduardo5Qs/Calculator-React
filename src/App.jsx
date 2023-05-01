import React, { useState } from 'react';
import './App.css';

function App() {
  const [ result, setResult ] = useState('');

  const handleClick = event => {
    return setResult(digit => digit + event.target.value);
  };

  const deleteDigt = () => {
    if(result === eval(result.toString())) return setResult('');

    return setResult( num => num.slice(0,-1));
  };

  const clearScreen = () => {
   return setResult('');
  };

  const calculate = () => {
    try{
      if(result === '') return;
      return setResult(eval(result.toString()));
    } catch (err) {
      setResult('');
      alert('Tentando quebrar meu software amigão? Se conseguir não se esqueça de abrir um issue no repositório deste projeto :)');
      return;
    };
  };

  return (
    <div className="App">
      <div id="container">
          <input type="text" value={result} disabled/>
        <table>
          <tbody>
            <tr>
              <td colSpan={2}><button className='colorDetails' value="CLEAR" onClick={clearScreen}>CLEAR</button></td>
              <td><button className='colorDetails' value="DEL" onClick={deleteDigt}>DEL</button></td>
              <td><button className='colorDetails' value="*" onClick={handleClick}>*</button></td>
            </tr>
            <tr>
              <td><button value="7" onClick={handleClick}>7</button></td>
              <td><button value="8" onClick={handleClick}>8</button></td>
              <td><button value="9" onClick={handleClick}>9</button></td>
              <td><button className='colorDetails' value="/" onClick={handleClick}>/</button></td>
            </tr>
            <tr>
              <td><button value="4" onClick={handleClick}>4</button></td>
              <td><button value="5" onClick={handleClick}>5</button></td>
              <td><button value="6" onClick={handleClick}>6</button></td>
              <td><button className='colorDetails' value="+" onClick={handleClick}>+</button></td>
            </tr>
            <tr>
              <td><button value="1" onClick={handleClick}>1</button></td>
              <td><button value="2" onClick={handleClick}>2</button></td>
              <td><button value="3" onClick={handleClick}>3</button></td>
              <td><button className='colorDetails' value="-" onClick={handleClick}>-</button></td>
            </tr>
            <tr>
              <td><button value="0" onClick={handleClick}>0</button></td>
              <td><button value="." onClick={handleClick}>.</button></td>
              <td colSpan={2}><button className='colorDetails' value="=" onClick={calculate}>=</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default App;