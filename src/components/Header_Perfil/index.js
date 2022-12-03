import React from "react";
import "./style.css"
import Logo from "../../assets/logo.png"

export default function Header_Perfil() {
    return (
        <div className="header">
            <div class="logo">
                <img src={Logo} alt="logo" width={150} height={150} />
            </div>
            <div className="busca">
                <input/>
            </div>
        </div>




    );


}