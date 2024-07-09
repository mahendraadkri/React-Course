import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import{BrowserRouter as Router,Routes,Route,Link} from "react-router-dom"


function App() {
  const [mode, setMode] = useState('light'); // Wheather darkmode is enable or not

  //Alert
  const [alert, setAlert] = useState(null);


  const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
        setAlert(null);
      }, 1500);
  }

  //darkmode
  const toggleMode = () => {
    if(mode === 'light'){
      setMode ('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been switched", "success");
      // document.title = 'TextUtils - Dark Mode'; //To show this in title
      // setInterval(()=>{
      //   document.title = 'Textutils is Amazing Mode';
      // }, 2000);
      // setInterval(()=>{
      //   document.title = 'Install TextUtils Now';
      // }, 1500);


    }
    else{
      setMode ('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been switched", "success");
    
    }

    
  }
  return (
  <>
  {/* <Navbar title="TextUtils" aboutText="About" /> */}
<Router>
  <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
  <Alert alert={alert}/>
  <div className="container my-3">
    <Routes>
        <Route exact path="/" element={<TextForm showAlert={showAlert}  heading="Enter the text to analyze below:" mode={mode} />} />
        <Route exact path="/about" element={<About />} />
    </Routes>
  </div>
</Router>
  
  </>
  );
}

export default App;
