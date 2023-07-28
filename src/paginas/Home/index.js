import React from "react";

import Topo from '../../componentes/Topo'
import Rodape from '../../componentes/Rodape';

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

            <section className="box-eventos">
                <div>
                    <h2>nossos eventos</h2>
                    <span>Delicias com sorvete!</span>
                    <p>Mais do que uma sorveteria, uma extensão da sua casa! Estamos aqui prontinhos para te atender e oferecer os melhores eventos com os melhores sorvete da sua vida! Venha nos conhecer e passar um tempo aqui com a gente.</p>
                </div>
                <div>
                    <img src="./assets/eventos-image.jpg"/>
                </div>
            </section>

            <section className="box-Sobre">
                <div>
                    <img src="./assets/sobre-image.jpg"/>
                </div>
                <div>
                    <h2>sobre nós</h2>
                    <span>Alegria em cada casquinha!</span>
                    <p>Venha tomar o melhor sorvete da região aqui com a gente! Nós estamos há anos no mercado produzindo o que tem de melhor para o 	nosso cliente e você não pode ficar fora dessa. Venha nos fazer uma visita e aproveite o melhor atendimento e o melhor sorvete da cidade.</p>
                </div>
            </section>
        </main>
        <Rodape />
        </div>
    )
}