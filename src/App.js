import './App.css';
import React from 'react';
import LandingPage from './Pages/LandingPage';
import { Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import Navbar from './Components/Navbar';


function App() {
  return (
    <>
      <Router>
      <Navbar/>
        <Routes>
          <Route path='/' element={<LandingPage/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
