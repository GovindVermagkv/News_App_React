import React from "react";
import { useState, useEffect } from "react";
import '../App.css'
import Footer from "./Footer";




const Headlines = () => {
    const [formdata, SetformData] = useState({
        "input":"",
    })
    // const {name,value}=useState();

    const handleInput=(e)=>{
        e.preventDefault()
    console.log(e.target.value);
    const { name, value } = e.target

    SetformData({ ...formdata, [name]: value })
    }










    const [users, setUsers] = useState([])

    const fetchData = () => {
        fetch(`https://newsapi.org/v2/everything?q=${formdata.input}&from=2022-09-16&sortBy=publishedAt&apiKey=26e06a9990d74e95b4846cb6fe74bbf3`)
            .then(response => {
                return response.json()
            })
            .then(data => {
                setUsers(data.articles)
            })
        //   console.log(setUsers);
    }

    useEffect(() => {
        // fetchData()
        // console.log(users);
    }, [])

    return (
        <>

            <div id="searcharea">
                <input type={"text"} onChange={handleInput} placeholder='Search' name="input" value={formdata.input} />
                <button onClick={fetchData}>Search</button>
            </div>





            <div>
                {users.length > 0 && (
                    <div id="headcontainer">
                        {users.map(user => (
                            <>
                                <div id="box">
                                    <div id="box2" className="animate__animated animate__zoomIn">
                                        <div id="image">
                                            <img src={user.urlToImage} />
                                        </div>

                                        <div id="title">
                                            <h2>{user.title}</h2>
                                            <div id="author">
                                                <p><strong >Author : </strong> {user.author}</p>
                                                <p>{user.publishedAt}</p>
                                            </div>
                                            <p>{user.description}</p>
                                        </div>
                                        <div id="icons">
                                            <div>
                                                <i className="fa fa-heart-o"></i>
                                                <i className="fa fa-comment-o"></i>
                                                <i className="fa fa-send-o"></i>
                                            </div>
                                            <details>
                                                <summary>READ MORE</summary>
                                                <p>{user.content}</p>
                                            </details>

                                        </div>
                                    </div>

                                </div>

                            </>
                        ))}
                    </div>
                )}
            </div>
            <Footer />
        </>
    )
}
export default Headlines;