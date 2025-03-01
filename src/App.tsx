import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Contact from './pages/Contact';
import './index.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/iletisim" element={<Contact />} />
          </Routes>
        </main>
        <footer className="bg-dark text-white text-center py-6">
          <p>&copy; 2024 ANA SİGORTA - Tüm Hakları Saklıdır</p>
        </footer>
      </div>
    </Router>
  );
};

export default App; 