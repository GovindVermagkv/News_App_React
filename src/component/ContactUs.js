import React from "react";
import Footer from "./Footer";
import '../App.css'
import 'animate.css'

const Contact = () => {
    return (
        <>
            <div id="aboutcontainer" className="animate__animated animate__zoomIn">
                <div><h1>Contact Us</h1>
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
export default Contact;