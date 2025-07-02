import React from 'react'
import './CardContador.css'
import BotonSuma from '../BotonSuma/BotonSuma'

const CardContador = ({ onClickSumar, buttonText }) => {
    return(
        <div className="card">
            <h3 className="title">Contador de clicks</h3>
            <BotonSuma onClick={onClickSumar} text={buttonText}/>
        </div>
    )
}

export default CardContador;