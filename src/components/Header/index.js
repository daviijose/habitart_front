import React from "react";
import "./style.css"
import Logo from "../../assets/logo.png"
import { IoIosSearch } from "react-icons/io";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <div className="header">
            <div class="logo">
                <img src={Logo} alt="logo" width={200} height={200} />
            </div>
            <div className="busca">
                <input />
                <div className="lupa">
                    <h1> <IoIosSearch /></h1>
                </div>
            </div>
            <div className="botao">
                <div className="login">
                    <Link style={{ textDecoration: 'none' }} to="/login"><h2>LOGIN</h2></Link>
                </div>
                <div className="cadastro">
                    <Link style={{ textDecoration: 'none' }} to="/Cadastro"><h2>CADASTRO</h2></Link>
                </div>
            </div>
        </div>


    );
}