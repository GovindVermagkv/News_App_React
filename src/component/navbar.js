import React from "react";
import {Link} from 'react-router-dom'

const Navbar=()=>{
    return(
        <>
             <nav id="Layout_Container2">
                    <ul>
                        <li><Link to='/' id="link">Headline</Link></li>
                        <li><Link to='/About' id="link">About</Link></li>
                        <li><Link to='/ContactUs' id="link">ContactUs</Link></li>
                        <li><Link to='/Team' id="link">Team</Link></li>
                    </ul>
                </nav>
        </>
    )
}

export default Navbar;