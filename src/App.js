import React from 'react';
import {BrowserRouter as Router ,Routes, Route} from 'react-router-dom';
import Home from './page/Home';
import Join from './page/Join';
import New from './page/New';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' exact element={<Home/>}></Route>
        <Route path='/join' exact element={<Join/>}></Route>
        <Route path='/new' exact element={<New/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
