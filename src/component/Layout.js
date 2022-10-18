import React from "react";
import { Outlet, Link } from "react-router-dom";
import '../App.css'
import Navbar from "./navbar";
// import { useState } from "react";

const Layout = () => {

    return (
       
        <>
         
            <div id="Layout_Container">
                <div>
                    <h1><i class="fa fa-newspaper-o"></i>अपनी खबर</h1>
                   
                </div>

                <Navbar />
            </div>
            <Outlet />
        </>
    )
}
export default Layout;