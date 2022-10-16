
import './App.css';
import Layout from './component/Layout';
import Headlines from './component/Headlines';
import About from './component/About';
import ContactUs from './component/ContactUs';
import Team from './component/Team';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import {useState} from 'react'
import 'animate.css'



function App() {

  const [Dark, setDark] = useState(false
    // {
    // "Color": "black",
// }
)

const handleBgColor=()=>{
    if(Dark){
        setDark(false) 
    }
    else{
        setDark(true)
    }
  
}

  return (
   <>
   <div id='Appdiv' style={ Dark ? {backgroundColor:"black",color:'white'} : {backgroundColor:""}}  >
 
   
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Headlines />} />
          <Route path='About' element={<About />} />
          <Route path='ContactUs' element={<ContactUs />} />
          <Route path='Team' element={<Team />} />
        </Route>
      </Routes>
    </BrowserRouter>
    
    <i className={ Dark ? "fa fa-sun-o" : "fa fa-moon-o"} style={Dark ? {color:"white"}:{color:"black"}} onClick={handleBgColor} id="changeicon"></i>

    {/* <h1>ram</h1> */}
    </div>
    </>

  );
}

export default App;
