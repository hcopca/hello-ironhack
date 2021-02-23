//IMPORTACIONES
import React from 'react'


//Funcion

function Features(props) {
    return (
      <div class="componente">
        <img src={props.src} alt="icono 1"/>
        <p class="encabezado">{props.text}</p>
        <p class="explicacion">{props.explanation}</p>
      </div>
    )
}

export default Features