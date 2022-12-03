import React from "react";
import Chicoscience from "../../assets/chicoscience.png";
import Artesanato from "../../assets/artesanato.png";
import Frevo from "../../assets/frevo.png";
import Frutas from "../../assets/frutas.png";
import "./style.css";

export default function Midle() {
    return (
        <div >
            <div class="midle">
                <div class="img-master">
                    <div className="img">
                        <img src={Frevo} alt="frevo" width={300} height={300} />
                    </div>

                    <div className="img">
                        <img src={Chicoscience} alt="chicoscience" width={300} height={300} />
                    </div>

                    <div className="img">
                        <img src={Frutas} alt="frutas" width={300} height={300} />
                    </div>

                    <div className="img">
                        <img src={Artesanato} alt="artesanato" width={300} height={300} />
                    </div>
                </div>
             <div className="text-master">
                <h1>O ambiente dos artistas</h1>
                <h2>O Habitarte surgiu ao enxergar a grande dificuldade enfrentada pelos artistas em tentar ganhar visibilidade no mercado cultural. Até mesmo antes da pandemia esse problema sempre foi uma difícil realidade para muitos que tentam seguir uma carreira artística e não sabem como expor seu trabalho. Com o habitarte os artistas poderão criar um portfólio com conteúdos artísticos (Vídeos, fotos e áudios). que serão expostos para possíveis contratantes, empresários, produtores culturais e assim como qualquer pessoa que se interesse por conteúdos culturais. </h2>
            </div>   
                
                
            </div>
        </div>


    );
}