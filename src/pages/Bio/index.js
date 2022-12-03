import React from "react";
import Header_Perfil from "../../components/Header_Perfil";
import "./style.css"
import logoinsta from "../../assets/logoinsta.png";
import devotosicone from "../../assets/devotosicone.jpg";
import seta from "../../assets/seta.png";
import chico from "../../assets/chico.jpg";
import odiosa from "../../assets/odiosa.jpg";
import siba from "../../assets/siba.jpg";
import twitterlogo from "../../assets/twitterlogo.png";
import logouticon from "../../assets/logouticon.png"
import whatsapplogo from "../../assets/whatsapplogo.png"
import ReactPlayer from "react-player";
import Footer from "../../components/Footer";
import Bioedit from "./Bioedit";
import { Link } from "react-router-dom";
export default function Perfil() {
    return (

        <div>
            <Header_Perfil />
            <div className="container-master-perfil">
            <div className="barra-lateral">
                    <div className="options-barra">
                    <div className="icone_artista"><img src={devotosicone} alt="Avatar" class="avatar" width={500} height={500}/></div> 
                        <h1>Devotos</h1>
                        <Link style={{ textDecoration: 'none' }} to="/Perfil_mscs"><p className="router-text">Perfil</p></Link>
                        <Link style={{ textDecoration: 'none' }} to="/Eventos"><p className="router-text">Eventos</p></Link>
                        <Link style={{ textDecoration: 'none' }} to="/Bio"><p className="router-text">Bio</p></Link>                  
                    </div>  
                    <div className="logout">
                        <Link style={{ textDecoration: 'none' }} to="/login"><p className="router-text">Log out</p></Link>
                        <img src={logouticon} alt="logout" class ="logout" width={50}></img>
                    </div> 
                </div>
               
                        
                        <Bioedit conteudo='"Devotos é uma banda de hardcore brasileira, composta por Cannibal (baixo e vocal), Celo (bateria) e Neilton (guitarra).

A banda surgiu em 1988, originária do bairro Alto José do Pinho, no Recife, inicialmente com o nome de Devotos do Ódio, título de um livro de José Louzeiro, sugerido por Lael, baixista da banda SS 20. Em 1993, venceram o concurso do Festival Recife Rock Show, o que possibilitou a assinatura do primeiro contrato com uma gravadora e posteriormente o lançamento do primeiro CD.

Tem uma formação típica do velho e bom Rock’n roll, constroem um som de base sólida. A música da banda é especialmente influênciada pelo punk rock e pelo reggae, entretanto, como uma autêntica banda brasileira, as influências percorrem toda a diversidade dessa cultura sem perder a força do rock.

O primeiro disco foi produzido por Lucio Maia, guitarrista da banda Nação Zumbi, e o segundo por Dado Villa-Lobos, ex-guitarrista da Legião Urbana.

Em 2000 a banda passou a se chamar apenas Devotos"'/>

                
                
                <div className="sugest_user">
                    <div className="img-1">
                    <div className="icone_artista"><img src={chico} alt="Avatar" class="avatar" width={500} height={500}/></div>
                        
                    </div>
                    <div className="img-1">
                    <div className="icone_artista"><img src={odiosa} alt="Avatar" class="avatar" width={500} height={500}/></div>
                       
                    </div>
                    <div className="img-1">
                    <div className="icone_artista"><img src={siba} alt="Avatar" class="avatar" width={500} height={500}/></div>
                      
                    </div>
                </div>
            </div>


            <Footer />
        </div>
    )
}