import './App.css';
import React from 'react';
import LandingPage from './Pages/LandingPage';
import { Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import Navbar from './Components/Navbar';
import Collection from './Pages/Collection';


function App() {
  return (
    <>
      <Router>
      <Navbar/>
        <Routes>
          <Route path='/' element={<LandingPage/>} />
          <Route path='/collection/:collectionId' element={<Collection/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
