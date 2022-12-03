import "./style.css"
import ReactPlayer from "react-player";
import twitterlogo from "../../assets/twitterlogo.png";
import logoinsta from "../../assets/logoinsta.png";
import whatsapplogo from "../../assets/whatsapplogo.png"
import lapis from "../../assets/lapis.png"
export default function Bioedit (props){
    return(
        <div> 
            <div className="bio_master">
                <h1>SAIBA MAIS SOBRE</h1>
                    <div className="text_bio">
                        <h3>{props.conteudo}</h3>
                        <div className="lapis">
                            <img src={lapis} alt="lapis" width={30} height={30}/></div>
                        </div> 
                        
                        <h1>REDES SOCIAIS</h1>
                    <div class="redes_bio">
                    <img src={logoinsta} alt="frevo" width={70} height={70} />
                    <img src={twitterlogo} alt="frevo" width={70} height={70} />
                    <img src={whatsapplogo} alt="frevo" width={70} height={70} />
                 
                </div> 
        </div>
        </div>
       
    )
} 