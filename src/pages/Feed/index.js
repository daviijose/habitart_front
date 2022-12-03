import React from "react";
import "./style.css"
import post from "../../assets/post.png";
import Header_Perfil from "../../components/Header_Perfil";
export default function Feed() {
    return (
        
        <div className="Master">
            <Header_Perfil />
            <div class="menu_lateral">
                <div class="barra-lateral">
                    <div className="barra_opcoes">
                        <h1>Marcos</h1>
                        <p>Trabalhos</p>
                        <p>Eventos</p>
                        <p>fotos</p>
                    </div>
              </div>
            </div>
            
            <div className="feed_post">
                       
                        <img src={post} alt="post" width={300} height={300} />
                        <h1>aaaaaaaaaaaaaa</h1>
                </div>
        </div>
    );

}