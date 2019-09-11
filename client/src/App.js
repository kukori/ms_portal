import React, {Fragment, useEffect} from 'react';
import Navbar from './components/layout/Navbar';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

function App() {
  useEffect(() => {
    // Init Materialize js
    M.AutoInit();
  });

  return (
    <Fragment>
      <Navbar title={'M S'}/>
    </Fragment>
  );
}

export default App;
