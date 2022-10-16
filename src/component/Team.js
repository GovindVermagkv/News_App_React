import React from "react";
import Footer from "./Footer";
import 'animate.css'

const Team=()=>{
return(
    <>
        <div id="teamcontainer" className="animate__animated animate__zoomIn">
                <div id="team"><h1> Developed By</h1>
                <img src="https://media-exp1.licdn.com/dms/image/C5603AQHEVOygiaMHJA/profile-displayphoto-shrink_400_400/0/1631068825613?e=1671667200&v=beta&t=MNKanPB-EtAF8hMNY5hZFswULVqbWfMuOdtDrOx53Xc" />
                    
                    <p><span>Name :-</span> Govind verma</p>
                    <p><span>Email :-</span> sonygovind.gkv740@gmail.com</p>
                    <p><span>Phone :-</span> +91 7307220229</p>
                    <p><span>Adress :-</span> Baksi ka talab , Lucknow ,uttar pradesh 226202</p>
                    <p><span>Linkedin / Google :-</span> Govind verma srimt</p>
                </div>
            </div>
        <Footer />
    </>
)
}
export default Team;