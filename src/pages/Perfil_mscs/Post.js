import "./style.css"
import ReactPlayer from "react-player";
export default function Post (props){
    return(
        <div className="post_master">
        <h1>POSTS</h1>
        <div className="post">
        <ReactPlayer url={props.link} border-Radius="25px"/>
            {/* <div className="player"><iframe width="480" height="320" src="https://youtu.be/U3xy9cRQn8o" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe></div>*/}
        </div>
        <div className="text">
            <p>{props.conteudo}</p>
            
        </div>
        </div>
    )
} 