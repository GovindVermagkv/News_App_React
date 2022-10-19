import React from "react";
import { useState, useEffect } from "react";
import '../App.css'
import Comment from "./coment";
import Footer from "./Footer";
import Like from "./Like";




const Headlines = () => {

    const [formdata, SetformData] = useState({
        "input": "",
    })

    const handleInput = (e) => {
        e.preventDefault()
        console.log(e.target.value);
        const { name, value } = e.target

        SetformData({ ...formdata, [name]: value })
    }

    var today = new Date(),
        date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();


    const [currentdate] = useState({
        date: date
    })

    // -----------------------like------------------------//










    const [users, setUsers] = useState([])



    const fetchData = () => {
         fetch(`https://newsapi.org/v2/everything?q=${formdata.input}&from=${currentdate.date}&to=${currentdate.date}&sortBy=popularity&apiKey=26e06a9990d74e95b4846cb6fe74bbf3`)
            .then(response => {
                return response.json()
            })
            .then(data => {
                setUsers(data.articles)
                console.log(data);
            })
        //   console.log(setUsers);

    }

    useEffect(() => {
        // fetchData()
        fetch(`https://newsapi.org/v2/everything?q=tesla&from=2022-09-18&sortBy=publishedAt&apiKey=26e06a9990d74e95b4846cb6fe74bbf3`)
            .then(response => {
                return response.json()
            })
            .then(data => {
                setUsers(data.articles)
                console.log(data);
            })

    }, [])

    return (
        <>

            <div id="searcharea">
                <input type={"text"} onChange={handleInput} placeholder='Search' name="input" value={formdata.input} />
                <button onClick={fetchData}>Search</button>
            </div>



            <div id="Withapi">
                <div id="aside">
                    <p>World</p>
                    <p>pakistan</p>
                    <p>USA</p>
                    <p>US</p>
                    <p>Russia</p>
                    <p>Chine</p>
                    <p>Nepal</p>
                    <p>India</p>
                    <p>India</p>
                    <p>India</p>
                    <p>India</p>
                    <p>India</p>
                    <p>India</p>
                    <p>India</p>
                    <p>India</p>
                    <p>India</p>
                    <p>India</p>
                    <p>India</p>
                    <p>India</p>
                    <p>India</p>
                    <p>India</p>
                    <p>India</p>
                </div>
                <div id="withapi2">
                    {users.length > 0 && (
                        <div id="headcontainer">

                            {users.map((user) => (
                                <>
                                    <div id="box">
                                        <div id="box2" className="animate__animated animate__zoomIn ">
                                            <i className="fa fa-close" id="close"></i>
                                            <div id="image">
                                                <img src={user.urlToImage} alt="" />
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
                                                    <Like />
                                                    <details id="commentdiv">
                                                        <summary><i className="fa fa-comment-o" onClick={Comment}></i></summary>

                                                        <Comment />
                                                    </details>
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
            </div>
            <Footer />
        </>
    )
}
export default Headlines;