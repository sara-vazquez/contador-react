import React, { useState } from 'react'
import './BotonSuma.css'

function BotonSuma({ text = 'Sumar clic', color = '', onClick }) {
    const [clicked, setClicked] = useState(false);

    function handleClick() {
        setClicked(true);
        if (onClick) onClick();

        setTimeout(() => {
            setClicked(false);
          }, 200);
    }

    return (
        <button className={`botonSuma ${clicked ? 'clicked' : ''}`} style ={{ backgroundColor: color }} onClick={handleClick}>
        {text}
        </button>
    );

}    
    

export default BotonSuma;