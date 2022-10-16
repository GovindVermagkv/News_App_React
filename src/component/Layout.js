import React from "react";
import { Outlet, Link } from "react-router-dom";
import '../App.css'
import { useState } from "react";

const Layout = () => {

    const [Value, setValue] = useState({
        "value": "",
    })

    return (
       
        <>
         
            <div id="Layout_Container">
                <div>
                    <h1><i class="fa fa-newspaper-o"></i>अपनी खबर</h1>
                    <div>
                        <input type={"text"} placeholder='Search' name="search" value={Value.value} />
                        <button>Search</button>
                    </div>
                   
                </div>

                <nav>
                    <ul>
                        <li><Link to='/' id="link">Headline</Link></li>
                        <li><Link to='/About' id="link">About</Link></li>
                        <li><Link to='/ContactUs' id="link">ContactUs</Link></li>
                        <li><Link to='/Team' id="link">Team</Link></li>
                    </ul>
                </nav>
            </div>
            <Outlet />
        </>
    )
}
export default Layout;