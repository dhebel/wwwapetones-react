import React from 'react';
import './App.css';

const Encuesta = () => {

    function createRespuesta() {   
        let nombre = document.getElementById("nombre").value;
        let edad = document.getElementById("edad").value;
        let gatos = document.getElementById("gatos").value;
      
      fetch('https://b4lo85pvp3.execute-api.us-east-2.amazonaws.com/desarrollo/encuesta', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({nombre, edad, gatos}),
      })
        .then(response => {
          return response.text();
        })
    }

    const respuesta = () =>{
        createRespuesta();
    }

    return (
        <div className="body-encuesta">
            <div className="container-encuesta">
                <div className="input">
                    <label>Nombre</label>
                    <input id='nombre' type="text"/>
                </div>
                <div className="input">
                    <label>Edad</label>
                    <input id='edad' type="number"/>
                </div>
                <div className="input">
                    <label>¿Te gustan los gatos?</label>
                    <select name="gatos" id="gatos">
                        <option value="Si">Si</option>
                        <option value="No">No</option>
                    </select>
                </div>
                <div className="enviar">
                    <button onClick={respuesta}>
                        Enviar
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Encuesta;