import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Your page imports
import Home from './pages/Home';

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
          
          <Route path="/" element={<Home />} />
          \
          
          {/* You can add more protected routes here */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;


