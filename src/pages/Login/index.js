import React from "react";
import { useState} from 'react';
import Header from "../../components/Header/index";
import Footer from "../../components/Footer/index";
import "./style.css"
import { Link } from "react-router-dom";

export default function Login() {

    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")

    return (

        <div className="container">
            <Header/>
            <Link to= "/Perfil_mscs"><p>perfil_mscs</p></Link>
            <Link to= "/Feed"><p>feed</p></Link>
            <Link to= "/Perfil_desenhistas"><p>Perfil_desenhistas</p></Link>
            <Link to= "/Bio"><p>Bio</p></Link>
            <Link to= "/Eventos"><p>Eventos</p></Link>
            
            <div className="container-login">
                <div className="wrap-login">
                    <form className="login-form">
                        <span className="login-form-title">Habitarte</span>

                        <div className="wrap-input">
                            <input
                                className={email !== "" ? 'has-val input' : 'input'}
                                type="email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                            <span className="focus-input" data-placeholder="Email"></span>
                        </div>

                        <div className="wrap-input">
                            <input
                                className={senha !== "" ? 'has-val input' : 'input'}
                                type="password"
                                value={senha}
                                onChange={e => setSenha(e.target.value)}
                            />
                            <span className="focus-input" data-placeholder="Senha"></span>
                        </div>

                        <div className="log-botao">
                        <Link style={{ textDecoration: 'none' }} to= "/Perfil_mscs"><button className="log">Entrar</button></Link> 
                        </div>

                        <div className="text-forget">
                            <a className="forget" href="#">Esqueceu a senha?</a>
                        </div>

                        <div className="cad-botao">
                         <Link style={{ textDecoration: 'none'}}to = "/Cadastro"> <button className="cad">Criar nova conta</button></Link> 
                        </div>

                    </form>
                </div>
            </div>
            <Footer/>
        </div>  
    );
}