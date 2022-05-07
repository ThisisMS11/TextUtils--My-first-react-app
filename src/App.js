import './App.css';
import Navbar2 from './components/Navbar2';
import Textform from './components/Textform';
import PropTypes from 'prop-types'
import About from './components/About';
import React, { useState } from 'react'
import Alert from './components/Alert';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";



function App() {
  // ! Hooks :- they let you use many react features without writing classess.

  // mode is a state variable
  // useState is a new way to use the exact same capabilities that this.state provides in a class.

  const [mode, setMode] = useState('light');

  // 
  const [alert, setAlert] = useState(null);

  // This way you can pass variables to arrow functions.
  const showalert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
  }

  // togglemode is to change the body backgroundColor.
  const togglemode = (color) => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = color;
      showalert(`${color} mode has been enabled`, "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showalert("Light mode has been enabled", "success");

    }
  }
  const about = 'About me'

  return (
    <>


    {/*//?using react router we have managed to jump from one page to another without reloading of website.React Router is used to define multiple routes(path) in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route. */}

    {/* React do partial matching of paths so in order to completely match with the assigned path we must use //! exact
    
    users ---->component1
    users/home ------->component2 */}



      <Router>
        <Navbar2 mode={mode} togglemode={togglemode} title={'TextUtils'} abouttext={about} />
        <Alert alerto={alert} />
        <Routes>

          <Route exact path="/about" element={<About />}>

          </Route>

          <Route exact path="/" element={<Textform mode={mode} />}>

          </Route>

        </Routes>

      </Router>

    </>

  );
}

// this is to ensure that the types of props remains the way we want them to be.
Navbar2.protoTypes = {
  title: PropTypes.string.isRequired, // made essential using isrequired
  abouttext: PropTypes.string
}

//! Default values of props elements in case we do not pass any other this will be taken as prop content.
Navbar2.defaultProps = {
  title: 'set title here',
  abouttext: 'set about us here'
}

Textform.protoTypes = {
  message: PropTypes.string
}
Textform.defaultProps = {
  message: "Your story will appear here"
}

export default App;




// for new version of react router syntax is now a bit different so 
//https://stackoverflow.com/questions/63124161/attempted-import-error-switch-is-not-exported-from-react-router-dom