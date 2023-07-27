import React from "react";

import Topo from '../../componentes/Topo'

export default function Home(){
    return (
        <div>
        <Topo />
        <main>
            <section className="box-banner">
                <div>
                    <h1>sorvete artesanal</h1>
                </div>
            </section>

            <section className="box-sabores">
                <div>
                    <img src="./assets/banner-sabores.jpg"/>
                </div>
                <div>
                    <h2>nossos sabores</h2>
                    <span>Novos e deliciosos!</span>
                    <p>Sorvete bom é aquele feito com os melhores ingredientes! Aqui na gelateria todos os nossos produtos são naturais, à base de frutas e sem nenhum conservante! Também temos opções sem lactose e sem açúcar. Venha conhecer e perceber que tem como o sorvete ser delicioso e saudável ao mesmo tempo!</p>
                </div>
            </section>

            <section className="box-eventos"></section>

            <section className="box-"></section>
        </main>
        </div>
    )
}