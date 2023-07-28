import React from "react";
import { Link } from 'react-router-dom';
import './style.css'

export default function Topo(){
    return (
        <header className="topo">
            <nav className="nav-bar limitar-secao">
                <div className="container-logo">
                    <img src="./assets/logo.png" />
                </div>
                <ul className="menu">
                    <li className="menu-item">
                        <Link to='/'>Home</Link>
                    </li>
                    <li className="menu-item">
                        <Link to='/Sabores'>Sabores</Link>
                    </li>
                    <li className="menu-item">
                        <Link to='/Sobre'>Sobre</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}