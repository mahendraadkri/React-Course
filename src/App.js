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

  const removeBodyClasses = ()=>{
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-primary');
  }

  //darkmode
  const toggleMode = (cls) => {
    removeBodyClasses();
    console.log(cls)
    document.body.classList.add('bg-'+cls)
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
        <Route exact path="/" element={<TextForm showAlert={showAlert}  heading="Try TextUtils - Word counter, Character counter, Paragraph counter, Remove extra spaces" mode={mode} />} />
        <Route exact path="/about" element={<About mode={mode} />}  />
    </Routes>
  </div>
</Router>
  
  </>
  );
}

export default App;
