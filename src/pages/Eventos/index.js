import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./style.css"
import devotosicone from "../../assets/devotosicone.jpg";
import logouticon from "../../assets/logouticon.png"
import locationicon from "../../assets/locationicon.png"
import chico from "../../assets/chico.jpg";
import odiosa from "../../assets/odiosa.jpg";
import siba from "../../assets/siba.jpg";
import { Link } from "react-router-dom";
import abrilprorock from "../../assets/abrilprorock.jpg";
export default function Eventos() {
    return (
        <>
            <Header />
            < div className="container-master">
                <div className="barra-lateral">
                    <div className="options-barra">
                        <div className="icone_artista"><img src={devotosicone} alt="Avatar" class="avatar" width={500} height={500} /></div>
                        <h1>Devotos</h1>
                        <Link style={{ textDecoration: 'none' }} to="/Perfil_mscs"><p className="router-text">Perfil</p></Link>
                        <Link style={{ textDecoration: 'none' }} to="/Eventos"><p className="router-text">Eventos</p></Link>
                        <Link style={{ textDecoration: 'none' }} to="/Bio"><p className="router-text">Bio</p></Link>
                    </div>
                    <div className="logout">
                        <Link style={{ textDecoration: 'none' }} to="/login"><p className="router-text">Log out</p></Link>
                        <img src={logouticon} alt="logout" class="logout" width={50}></img>
                    </div>
                </div>
                <div className="post-master-eventos">
                    <div className="post-eventos">
                        <div className=" icon-square">
                            <img src={abrilprorock} alt="location" class="location" width={200} height={200}></img>
                            <center><p className="name-post"> Nome</p></center>
                            <img src={locationicon} alt="location" class="location" width={50} height={50} />
                            <center><p className="name-post"> localização</p></center>
                            <center><p className="buton"> Tenho interesse</p></center>
                            <center><p className="buton"> Descrição</p></center>

                        </div>
                        <div className=" icon-square">
                            <img src={abrilprorock} alt="location" class="location" width={200} height={200}></img>
                            <center><p className="name-post"> Nome</p></center>
                            <img src={locationicon} alt="location" class="location" width={50} height={50} />
                            <center><p className="name-post"> localização</p></center>
                            <center><p className="buton"> Tenho interesse</p></center>
                            <center><p className="buton"> Descrição</p></center>

                        </div>
                        <div className=" icon-square">
                            <img src={abrilprorock} alt="location" class="location" width={200} height={200}></img>
                            <center><p className="name-post"> Nome</p></center>
                            <img src={locationicon} alt="location" class="location" width={50} height={50} />
                            <center><p className="name-post"> localização</p></center>
                            <center><p className="buton"> Tenho interesse</p></center>
                            <center><p className="buton"> Descrição</p></center>


                        </div>
                    </div>

                </div>
                <div className="sugest_user">
                    <div className="img-1">
                        <div className="icone_artista"><img src={chico} alt="Avatar" class="avatar" width={500} height={500} /></div>

                    </div>
                    <div className="img-1">
                        <div className="icone_artista"><img src={odiosa} alt="Avatar" class="avatar" width={500} height={500} /></div>

                    </div>
                    <div className="img-1">
                        <div className="icone_artista"><img src={siba} alt="Avatar" class="avatar" width={500} height={500} /></div>

                    </div>
                </div>

            </div>

            <Footer />
        </>
    );
}
