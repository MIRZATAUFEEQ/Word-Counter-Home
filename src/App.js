import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Form from './Components/form';
import Alert from './Components/Alert';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [mode, setmode] = useState('light')
  const togglemode = () => {
    if (mode === 'light') {
      setmode('dark')
      document.body.style.backgroundColor = '#042745'
    }
    else {
      setmode('light')
      document.body.style.backgroundColor = 'white'
    }
  }
  const [alert, setAlert] = useState(null)
  const showalert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  return (
    <>
      <Router>
        {/* default props  */}
        {/* <Navbar/> */}

        <Navbar title=<h2>word counter</h2> mode={mode} togglemode={togglemode} />
        <Alert alert={alert} />
        {/* <Form showalert={showalert} heading="Enter text here" mode={mode} /> */}

        {/* Route definitions */}
        <Routes>
          <Route path='/' element={<Form showalert={showalert} heading="Enter text here" mode={mode} />} />
          <Route path="/about" element={<About mode={mode}/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
