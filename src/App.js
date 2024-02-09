import React from 'react';
import {BrowserRouter as Router ,Routes, Route} from 'react-router-dom';
import Home from './page/Home';
import Join from './page/Join';
import New from './page/New';
import Game from './page/Game';
import NotFound from './page/NotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' exact element={<Home/>}></Route>
        <Route path='/join' exact element={<Join/>}></Route>
        <Route path='/new' exact element={<New/>}></Route>
        <Route path='/game' exact element={<Game/>}></Route>
        <Route path='*' element={<NotFound/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
