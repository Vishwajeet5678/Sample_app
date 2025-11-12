import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import React, { useState } from 'react';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";

function App() {
const [mode,setMode]=useState('light');
const[alert,setAlert]=useState(null);
const[pbtn,setPbtn]=useState();
const showAlert=(message,type)=>{
  setAlert({
    msgg:message,
    typee:type
  })
  setTimeout(()=>{
    setAlert(null);
  },1500);
}

const toggleMode=()=>{
  if(mode==='dark'){
    setMode('light');
    document.body.style.backgroundColor='white'
    showAlert("Light mode as enabled","Sucess")
     setBtnText("Enable Dark Mode")
     setPbtn("Enable Purple Mode")
      setInterval(()=>{
      document.title='Jai Shree Ram'
     },1000);
      setInterval(()=>{
      document.title='TextUtils Dark Mode is amazing'
     },1500);
    
  }else{
    setMode('dark');
    document.body.style.backgroundColor='#042473'
    showAlert("Dark mode as enabled","Sucess")
     setBtnText("Enable Light Mode")
     setPbtn("Enable Light Mode")
     document.title='TextUtils-Dark Mode';
    
  }
}

const toggleBlueMode=()=>{
  if(mode==='purple'){
    setMode('light');
    document.body.style.backgroundColor='white'
    showAlert("Light mode as enabled","Sucess")
     setPbtn("Enable Purple Mode")
     setBtnText("Enable Dark Mode")
    
  }else{
    setMode('purple');
    document.body.style.backgroundColor='#762189'
    showAlert("Purple mode as enabled","Sucess")
     setPbtn("Enable Light Mode")
     setBtnText("Enable Light Mode")
  }
}
 const[btnText,setBtnText]=useState();
  return (
    <>
    {/* <Router> */}
      <Navbar title="Jai Shree Ram" mode={mode} toggle={toggleMode} toggleBlueMode={toggleBlueMode}btnText={btnText}pbtn={pbtn}/>
      <Alert alert={alert}/>
      <div className='container my-3'>
      </div>
      
            <TextForm showAlert={showAlert} heading="Text Form" mode={mode} />

   {/* <Routes>
           <Route exact path="/about" element={<About />} />
            <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Text Form" mode={mode} />} />

        </Routes>
</Router> */}
      </>
  );
}


export default App;
