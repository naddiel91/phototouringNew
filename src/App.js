// import logo from './logo.svg';
import './App.css';
import React, { Component }  from 'react';

//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

//components
import Home from './components/Home';

function App() {
  return (    
     <div className='row' id="hmMainRow">
        <Home />
     </div>        
  );
}

export default App;
