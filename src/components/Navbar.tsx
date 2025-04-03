
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavClick = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-sm shadow-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-teal hover:text-teal-light transition-colors">
          Portfolio
        </a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {['about', 'skills', 'education', 'contact'].map((item) => (
            <button
              key={item}
              onClick={() => handleNavClick(item)}
              className="text-gray-700 hover:text-teal capitalize transition-colors"
            >
              {item}
            </button>
          ))}
        </div>
        
        {/* Mobile Navigation Toggle */}
        <button 
          className="md:hidden text-gray-700 hover:text-teal"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-16 left-0 w-full">
          <div className="container mx-auto px-4 py-2 flex flex-col">
            {['about', 'skills', 'education', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => handleNavClick(item)}
                className="py-3 text-gray-700 hover:text-teal capitalize border-b border-gray-100 transition-colors"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
