import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Notestate from './context/NoteState';
import Alert from './components/Alert';
import Login from './components/Login';
import Signup from './components/Signup';
import { useState } from 'react';


function App() {
  const [alert, setalert] = useState(null);
  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null)
    }, 1600);
  }

  const [mode, setmode] = useState("light");
  const [btn, setbtn] = useState("Enable dark mode");
  const togglemode = () => {
    if (mode === "light") {
      setmode("dark");
      setbtn("Disable dark mode");
      document.body.style.backgroundColor = "#042743";
      showalert("Dark mode has bee Enabled", "success");
    } else {
      setmode("light");
      setbtn("Enable dark mode");
      document.body.style.backgroundColor = "white";
      showalert("Light mode has bee Enabled", "success");
    }
  }
  return (
    <>
      <Notestate>
        <Router>
          <Navbar mode={mode} togglemode={togglemode} btn={btn} />
          <Alert alert={alert} />
          <div className="container">
            <Switch>
              <Route exact path='/'>
                <Home showalert={showalert} mode={mode} />
              </Route>
              <Route exact path='/about'>
                <About mode={mode} />
              </Route>
              <Route exact path='/login'>
                <Login mode={mode} showalert={showalert} />
              </Route>
              <Route exact path='/signup'>
                <Signup mode={mode} showalert={showalert} />
              </Route>
            </Switch>
          </div>
        </Router>
      </Notestate>
    </>
  );
}

export default App;
