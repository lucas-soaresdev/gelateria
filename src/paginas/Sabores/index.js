import React from "react";

import Topo from '../../componentes/Topo'
import Rodape from '../../componentes/Rodape'

export default function Sabores(){
    return (
        <div>
            <Topo />
            <main>
                <section>
                    <h1>nossos sabores</h1>
                </section>
                <section>
                    <h2>sabores de sorvete</h2>
                    <div>
                        <div>
                            <img src="./assets/sabor-oreo.jpg"/>
                            <h3>Sorvete de oreo</h3>
                            <p>Delicioso sorvete sabor Oreo. Uma explosão de sabor.</p>
                        </div>
                        <div>
                            <img src="./assets/sabor-pistache.png"/>
                            <h3>Sorvete Pistache</h3>
                            <p>Cremoso sorvete sabor pistache com pedacinhos de semente.</p>
                        </div>
                        <div>
                            <img src="./assets/sabor-cookies-avela.png"/>
                            <h3>Sorvete Cookies & Avelã</h3>
                            <p>O nosso melhor sorvete. Você vai adorar o sabor.</p>
                        </div>
                        <div>
                            <img src="./assets/sorbet-kiwi.png"/>
                            <h3>Sorvete de Kiwi</h3>
                            <p>Delicioso e refrescante sorvete sabor kiwi. Rico em vitamina C.</p>
                        </div>
                        <div>
                            <img src="./assets/sorbet-morango.png"/>
                            <h3>Sorvete de Morango</h3>
                            <p>Sorvete de morango gourmet. Tradicional e saboroso.</p>
                        </div>
                        <div>
                            <img src="./assets/sorbet-limao.png"/>
                            <h3>Sorvete de Limão Siciliano</h3>
                            <p>O incrivel sorvete gourmet de limão siciliano vai te encantar.</p>
                        </div>
                    </div>
                </section>
            </main>
            <Rodape />
        </div>
    )
}