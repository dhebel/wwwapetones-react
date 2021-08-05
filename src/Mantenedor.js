import React, {useState, useEffect} from 'react';
import './App.css';

const Mantenedor = () => {
    const [respuestas, setRespuestas] = useState([]);

    useEffect(() => { getRespuestas(); }, []);

    function getRespuestas() {
        fetch('http://localhost:3001')
          .then(response => {
            return response.json();
          })
          .then(data => {
            setRespuestas(data);
        });
        
    }

    return (
        <div className="body-mantenedor">
            <div className="encabezado">
                <label>Id</label>
                <label>Nombre</label>
                <label>Edad</label>
                <label>¿Gatos?</label>
            </div>
            {
                respuestas.map(respuesta => {
                    return (
                        <div className="respuesta">
                            <label>{respuesta.id}</label>
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

