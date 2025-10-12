import React from 'react';
import { ArrowRight } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="bg-white text-gray-800 h-screen flex flex-col">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <img src="/LOGO.svg" alt="Company Logo" className="h-16 w-16" />
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#investors" className="hover:text-indigo-600">для инвесторов</a>
            <a href="#business" className="hover:text-indigo-600">для бизнеса</a>
            <a href="#about" className="hover:text-indigo-600">о компании</a>
          </div>
          <button className="bg-indigo-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-indigo-700 transition-colors">
            Get Started
          </button>
        </nav>

        <div className="container mx-auto px-6 py-24 text-center flex-grow flex flex-col justify-center">
        </div>
      </header>
    </div>
  );
}

export default App;