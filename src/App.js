import React from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import './styles/globals.css';

function App() {
  return (
    <div className="App bg-white">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;