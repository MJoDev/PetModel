import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('token');

  // Si no hay token, redirige a /login
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  // Si hay token, renderiza el contenido protegido
  return children;
};

export default ProtectedRoute;