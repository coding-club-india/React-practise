import React, { Route,Routes } from 'react-router-dom'
import './App.css';
import Card from './component/Card';
import Home from './component/Home';
import Serach from './component/Serach';

function App() {
  return (
    <div className="App">
      <div className='pp'>

          {/* <Home/> */}
      <Serach/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/card' element={<Card/>} />

      </Routes>

      </div>
    

    </div>
  );
}

export default App;
