import { useState } from 'react';
import './App.css';
//import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
//import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
/*import { BrowserRouter as Router, 
  Route,Routes,
}  from 'react-router-dom';*/
function App() {
  const [mode, setMode] = useState('light');
  const [modetxt, setModetxt] = useState('enable dark mode');

  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light');
      setModetxt("enable dark mode");
      document.body.style.backgroundColor = 'white';
    } else {
      setMode('dark');
      setModetxt("enable light mode");
      document.body.style.backgroundColor = '#042743';
    }
  }

  return (
<>

  <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} AboutText="About us" forhome="Home" modetxt={modetxt} /*if want to change in somewhere we can use this*//>
    <div className="container my-3">
  
      {/*<About />*/}
        <TextForm heading="Enter the text to analyze" mode={mode} />
     
    </div>
</>   
  );
}
export default App;