import React, { useState } from 'react'
import CardContador from './components/CardContador/CardContador'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function handleClickSumar(){
    setCount(count => count + 1);
  }

  return (
    <>
    <h1>Ejemplo: Lifting State Up 👨‍👦</h1>
      <div className="content">
        <CardContador onClickSumar={handleClickSumar} buttonText='¡A sumar!'/>
      </div>
        <p className="infoClics">Total de clics: {count} {count > 10 ? '🙌🏼' : ''} {count > 20 ? '🔥' : ''} {count > 20 ? '🏆' : ''}</p>
    </>
  )
}

export default App
