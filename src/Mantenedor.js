import React, {useState, useEffect} from 'react';
import './App.css';

const Mantenedor = () => {
    const [respuestas, setRespuestas] = useState([]);

    useEffect(() => { getRespuestas(); }, []);

    function getRespuestas() {
        fetch('https://b4lo85pvp3.execute-api.us-east-2.amazonaws.com/desarrollo/encuesta')
          .then(response => {
            return response.json();
          })
          .then(data => {
            console.log(data.response)
            setRespuestas(data.response.Items);
            console.log(respuestas)
        });
        
    }

    return (
        <div className="body-mantenedor">
            <div className="encabezado">
                <label>Nombre</label>
                <label>Edad</label>
                <label>¿Gatos?</label>
            </div>
            {
                respuestas.map(respuesta => {
                    return (
                        <div className="respuesta">
                            <label>{respuesta.nombre}</label>
                            <label>{respuesta.edad}</label>
                            <label>{respuesta.gatos}</label>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default Mantenedor;

