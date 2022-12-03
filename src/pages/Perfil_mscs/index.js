import React from "react";
import Header_Perfil from "../../components/Header_Perfil";
import "./style.css"
import icon from "../../assets/icon.png";
import devotosicone from "../../assets/devotosicone.jpg";
import seta from "../../assets/seta.png";
import chico from "../../assets/chico.jpg";
import odiosa from "../../assets/odiosa.jpg";
import siba from "../../assets/siba.jpg";
import logouticon from "../../assets/logouticon.png"
import ReactPlayer from "react-player";
import Footer from "../../components/Footer";
import Post from "./Post";
import { Link } from "react-router-dom";
export default function Perfil() {
    return (

        <div className="master_perfil">
            <Header_Perfil />
            <div className="container-master-perfil">
                <div className="barra-lateral">
                    <div className="options-barra">
                    <div className="icone_artista"><img src={devotosicone} alt="Avatar" class="avatar" width={500} height={200}/></div> 
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
                <Post conteudo='Devotos é uma banda brasileira formada em 1988 por Cannibal (baixo e voz), Neilton (guitarra) e Celo Brown (bateria), sob o nome Devotos do Ódio, que foi tirado do título de um livro de José Louzeiro (1987). O grupo teve e ainda tem sua base no bairro de baixa renda que também tem abundantes problemas sociais e onde muitas pessoas trabalham para melhorar suas condições que se encontra nos morros de Recife, chamado Alto José do Pinho. No ano 2000 o grupo mudou seu nome para "Devotos" '
                   link="https://youtu.be/U3xy9cRQn8o"/>
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






    );
}