import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import Location from  './pages/Location/Location'
import Blog from './pages/Blog/Blog';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<ProtectedRoute><Home/></ProtectedRoute>} />
        <Route path="/location" element={<ProtectedRoute><Location/></ProtectedRoute>} />
        <Route path="/blog" element={<ProtectedRoute><Blog/></ProtectedRoute>} />



        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
