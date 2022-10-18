import React from "react";
import '../App.css';

const { useState } = React;

function Comment() {
    const [theArray, setTheArray] = useState([]);
    const addEntryClick = () => {
        setTheArray([...theArray, ` ${commentdata.inputvalue}`]);
    };



    const [commentdata, setCommentdata] = useState({
        'inputvalue': "",
    })


    const addEntryClick2 = (e) => {
        e.preventDefault();
        console.log(commentdata);
        const { name, value } = e.target;

        setCommentdata({ ...commentdata, [name]: value })
    }



    return [
        <>
            <div id="comment">
                <input type={"text"} onChange={addEntryClick2} name='inputvalue' value={commentdata.inputvalue} placeholder='Comment' />
                <button type="button" onClick={addEntryClick} >Add</button>
                <div>{theArray.map(entry =>
                    <div>{entry}</div>
                )}
                </div>
            </div>
        </>
    ];
}

export default Comment;   