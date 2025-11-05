import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import HomePage from './pages/HomePage';
import BusinessPage from './pages/BusinessPage';

const navLinks = [
    { id: 'investors', path: '/', text: 'Для инвесторов' },
    { id: 'business', path: '/business', text: 'Для бизнеса' },
    { id: 'about', path: '#about', text: 'О компании' },
];

// Header component
const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const getActiveNav = () => {
        const currentPath = location.pathname;
        if (currentPath === '/business') {
            return 'business';
        }
        if (currentPath === '/') {
            return 'investors';
        }
        // Add more checks if there are more pages
        return 'investors'; // default
    }

    const activeNav = getActiveNav();

  return (
    <header className="bg-white sticky top-0 z-50">
      <nav className="px-2 md:px-6 py-5 flex justify-between items-center">
        <div className="flex-1 flex justify-start">
          <Link to="/"><img src="/LOGO.svg" alt="IWM Logo" className="h-8" /></Link>
        </div>
        <div className="hidden md:flex items-center justify-center space-x-20 text-xs font-light tracking-wider">
            {navLinks.map((link) => (
                <Link
                    key={link.id}
                    to={link.path}
                    className={`uppercase transition-colors duration-300 px-5 py-2 rounded-full ${
                        activeNav === link.id
                            ? 'bg-custom-red text-white'
                            : 'text-gray-500 hover:text-brand-black'
                    }`}
                >
                    {link.text}
                </Link>
            ))}
        </div>
        <div className="flex-1 hidden md:flex items-center justify-end space-x-6 text-sm">
          <span className="cursor-pointer font-light">Ru</span>
          <a href="#login" className="font-light bg-brand-black text-white px-6 py-3 rounded-full hover:brightness-125 transition uppercase">Личный кабинет</a>
        </div>
        <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="focus:outline-none">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
        </div>
      </nav>
      {isMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 w-full shadow-lg">
          <div className="px-2 py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
                <Link
                    key={link.id}
                    to={link.path}
                    onClick={() => {
                        setIsMenuOpen(false);
                    }}
                    className={`uppercase font-light text-xs ${
                        activeNav === link.id
                            ? 'text-brand-black'
                            : 'text-gray-500 hover:text-brand-black'
                    }`}
                >
                    {link.text}
                </Link>
            ))}
            <div className="flex flex-col space-y-4 pt-4 border-t border-gray-200">
                <span className="cursor-pointer font-light">Ru</span>
                <a href="#login" className="font-light bg-brand-black text-white px-6 py-3 rounded-full hover:brightness-125 transition uppercase text-center">Личный кабинет</a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};


function App() {
  return (
    <Router>
        <div className="bg-white">
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/business" element={<BusinessPage />} />
                </Routes>
            </main>
        </div>
    </Router>
  );
}

export default App;