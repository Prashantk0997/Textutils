// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/textform';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   // Link
// } from 'react-router-dom';


function App() {
  const [mode,setMode] = useState('light');
  const [toggleText,setToggleText] = useState('Enabel Dark Mode');
  const [alert,setAlert] = useState(null);

  const showAlert=(message,type)=>{
      setAlert({
        msg:message,
        type:type,
      })
      setTimeout(()=>{
        setAlert(null);
      },1500)
        
  }

  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      setToggleText('Enabel light Mode');
      document.body.style.backgroundColor='#042743';
      document.body.style.color='white';
      showAlert("Dark Mode has been enabled", "success");
      document.title = "TextUtils - Dark Mode";
    }
    else{
      setMode('light');
      setToggleText('Enabel Dark Mode');
      document.body.style.backgroundColor='white';
      document.body.style.color='black';
      showAlert("Light Mode has been enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
  }

  return (
    <>
    {/* <Router> */}
      <Navbar title="TextUtils" mode={mode} toggleText={toggleText} toggleMode={toggleMode} />
      <Alert alert={alert} />
      {/* <div className="container my-3">
      <Routes>
           <Route exact path="/about" element={<About mode={mode}/>}/>
           <Route exact path="/" element={<Textform showAlert={showAlert} heading="Enter the Text to Analyse Below" mode={mode}/>}/>
      </Routes>
        <About/> */}
        <Textform showAlert={showAlert} heading="Enter the Text to Analyse Below"/>
      {/* </div>
      </Router> */}
    </>
    
  );
}

export default App;
