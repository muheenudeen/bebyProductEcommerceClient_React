import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LinkPage from './LinkPage';
import { AuthProvider } from './User/AuthContext/AuthContext';
import { Toaster, toast } from 'react-hot-toast';

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <LinkPage />
      </AuthProvider>
      <Toaster />
    </Router>
    
  );
};

export default App;
