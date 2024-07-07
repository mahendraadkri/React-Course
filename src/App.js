import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
function App() {
  const [mode, setMode] = useState('light'); // Wheather darkmode is enable or not
  return (
  <>
  {/* <Navbar title="TextUtils" aboutText="About" /> */}

  <Navbar title="TextUtils" mode={Mode} />

  <div className="container my-3">
  <TextForm heading="Enter The text to analyze below:" />
  {/* <About/> */}
  </div>
  </>
  );
}

export default App;
