import React from "react";
import Header_Perfil from "../../components/Header_Perfil/index";
import Footer from "../../components/Footer/index";
import { Link } from "react-router-dom";
import "./style.css"

export default function Cadastro() {

    return (
        <div className="container">
            <Header_Perfil />

            <div className="container-dados">
                <div className="box">
                    <div className="text-cad">
                        <center><h1 className="texth1">Cadastro realizado com sucesso retorne para a página de login para acessar a sua conta</h1></center>

                    </div>
                  <center>  <Link style={{ textDecoration: 'none' }} to="/login"> <button className="button-log" href="./">Login</button></Link>  </center>

                </div>
            </div>


            <Footer />
        </div>
    );
}