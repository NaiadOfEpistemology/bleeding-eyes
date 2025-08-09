import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PoemsList from './components/PoemsList';
import PoemView from './components/PoemView';
import './App.css';
import { useState, useEffect } from 'react';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('dark', darkMode);
  }, [darkMode]);

  return (
    <>
    
    <BrowserRouter>
      <div className="app-container">
      <header className="header">
  <div className="logo-title">
  
  <img src="/spiderpng.png" alt="Bleeding Eye" className="logo" />
  </div>
  
  <button onClick={() => setDarkMode(!darkMode)} className="toggle-button">
    {darkMode ? 'Light Mode' : 'Dark Mode'}
  </button>
</header>

        <main className="main-content">
        
          <Routes>
            
            <Route path="/" element={<PoemsList />} />
            <Route path="/poem/:id" element={<PoemView />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
    </>
  );
}
