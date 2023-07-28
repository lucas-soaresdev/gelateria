import React from "react";
import './style.css'

export default function Rodape(){
    return (
        <footer>
            <div>
                <img src=""/>
                <div>
                    <h3>endereço</h3>
                    <p>Av. Bernardino de Campos, 98</p>
                    <p>São Paulo, SP 12345-678</p>
                </div>
                <div>
                    <h3>contato</h3>
                    <p>info@meusite.com</p>
                    <p>Tel: (11) 3456-7890</p>
                </div>
                <div>
                    <h3>horários</h3>
                    <p>ABERTO TODOS OS DIAS</p>
                    <p>10:00 - 22:00</p>
                </div>
            </div>
            <div>
                <p>Gelateria. Orgulhosamente desenvolvido por <span>Lucas Soares</span></p>
            </div>
        </footer>
    )
}