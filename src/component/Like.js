import { useState } from "react";
import '../App.css'
import 'animate.css'




const Like=()=>{
    const [Count,setCount]=useState(0)
    // const [music,setAudio]=useState(false)
    
 const LikeCount=()=>{
    setCount(Count+1)
    // setAudio(true)
 }

    return(
        <>
            <div id="likecontainer">
                <i className="fa fa-heart-o" id="like" onClick={LikeCount}></i>
                <p >{Count}</p>
            </div>
        </>
    )
}
export default Like;