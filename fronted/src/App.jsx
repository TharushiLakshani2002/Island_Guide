import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Register from './pages/Register';
import Home from './pages/Home';
import Login from './pages/Login';
import Contact from './pages/Contact';
import About from './pages/About';
import Accomadations from './pages/Accomadations';
import Attractions from './pages/Attractions';
import Plan from './pages/plan';
import Place from './pages/Place';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Managing the logged-in state

  // ProtectedRoute component that checks if the user is logged in
  const ProtectedRoute = ({ children }) => {
    if (!isLoggedIn) {
      return <Navigate to="/login" replace />;
    }
    return children;
  };

  return (
    <div className="App">
      <Router>
        <Routes>
          {/* Unprotected Routes */}
          <Route path="/register" element={<Register/>}/>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/contact" element={<Contact/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/accomadations" element={<Accomadations/>}/>
          <Route path="/attractions/:placeID" element={<Place/>}/>
          <Route path="/plan" element={<Plan/>} />
          <Route path="/place" element={<Place/>}/>
          <Route path="/attractions" element={<Attractions/>}></Route>
          {/* You can add more protected routes here */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;


