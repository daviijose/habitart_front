import React from "react";
import { useState} from 'react';
import Header from "../../components/Header/index";
import Footer from "../../components/Footer/index";
import "./style.css"
import { Link } from "react-router-dom";

export default function Cadastro() {

    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [Nsenha, setNsenha] = useState("")

    return (
       <div className="container">
            <Header/>
      
            <div className="container-register">
                <div className="wrap-register">
                    <form className="register-form">
                        <span className="register-form-title">Habitarte</span>

                        <div className="wrap-input">
                            <p>Nome</p>
                            <input
                               className="input"
                                type="text"
                                value={nome}
                                onChange={e => setNome(e.target.value)}
                            />
                        </div>

                        <div className="wrap-input">
                            <p>E-mail</p>
                            <input
                                className="input"
                                type="email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                        </div>
 
                        <div className="wrap-input">
                            <p>Nova senha</p>
                            <input
                                className="input"
                                type="password"
                                value={senha}
                                onChange={e => setSenha(e.target.value)}
                            />
                        </div>

                        <div className="wrap-input">
                            <p>Confirme sua senha</p>
                            <input
                                className="input"
                                type="password"
                                value={Nsenha}
                                onChange={e => setNsenha(e.target.value)}
                            />
                        </div>

                        <div className="wrap-input">
                            <p>Nascimento</p>
                            <input className="input" type="date" />
                        </div>

                        <div className="cont-button">
                            <button className="cont"> <Link style={{textDecoration: 'none'}} to = "/ContCadastro">Continuar</Link></button>
                        </div>

                    </form>
                </div>
            </div>
            
            <Footer/>
       </div>
    )
}