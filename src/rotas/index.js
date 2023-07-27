import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from '../paginas/Home';
import Sabores from '../paginas/Sabores';
import Sobre from '../paginas/Sobre';

const Rotas = () =>(
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={ <Home/> } />
            <Route path="/Sabores" element={ <Sabores/>} />
            <Route path="Sobre" element={ <Sobre/> } />
        </Routes>
    </BrowserRouter>
)

export default Rotas;