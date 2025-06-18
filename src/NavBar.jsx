import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('/');
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const path = location.pathname.replace(/\/+$/, '') || '/';
    setActiveLink(path);
  }, [location]);

  const menuItems = [
    { name: 'Home', to: '/' },
    { name: 'About', to: '/about' },
    { name: 'Services', to: '/services' },
    { name: 'Projects', to: '/projects' },
    { name: 'Contact', to: '/contact' },
    { name: 'More', to: '/more' },
  ];

  return (
    <nav className="bg-[#1e2533] text-white shadow-md w-full">
      <div className="max-w-[1600px] px-6 py-4 mx-auto flex justify-between items-center">
        <Link 
          to="/" 
          className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
        >
          Bibash <span className="text-blue-400">Dahal</span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-2 items-center text-sm font-medium">
          {menuItems.map(({ name, to }) => (
            <li key={name}>
              <Link
                to={to}
                className={`px-4 py-2 rounded-full transition-all duration-300 ${
                  activeLink === to 
                    ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white' 
                    : 'hover:text-purple-400'
                }`}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden focus:outline-none" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-[#1e2533] px-6 pb-4">
          <ul className="flex flex-col gap-2 text-sm font-medium">
            {menuItems.map(({ name, to }) => (
              <li key={name}>
                <Link
                  to={to}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-2 rounded-full transition-all duration-300 ${
                    activeLink === to 
                      ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white' 
                      : 'hover:text-purple-400'
                  }`}
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
