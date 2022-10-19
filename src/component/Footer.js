import React, { useState } from "react";

const Footer=()=>{
const [date]=useState(
    {
        currentDateTime: Date().toLocaleString()
    }
)


return(
    <>
        <div id="footer">
        <p>ALL RIGHT RESERVED <span> &copy; </span>Govind Verma</p>
        <p>{date.currentDateTime}</p>
        </div>
    </>
)
}
export default Footer;