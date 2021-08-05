import React from 'react';
import { NavLink } from 'react-router-dom';
import './App.css';

const Navegacion = () => {
    return (
        <>
            <nav id="" className="nav">
                <img className="logo" src="/wwwapetones.png" alt="Logo"/>
                <ul className="links">
                    <li className="link-container">
                        <NavLink
                            exact
                            className="link"
                            activeClassName="active_class" 
                            to="/"> 
                                Encuesta
                        </NavLink>    
                    </li>
                    <li className="link-container">
                        <NavLink
                            exact
                            className="link"
                            activeClassName="active_class" 
                            to="/mantenedor"> 
                                Mantenedor
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default Navegacion;