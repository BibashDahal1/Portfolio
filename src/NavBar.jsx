import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'; // install lucide-react or replace with svg icons
import { motion, AnimatePresence } from 'framer-motion';


const links = ['Home', 'About', 'Services', 'Projects', 'Contact'];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 shadow-lg fixed w-full z-50">
      
      <div className="max-w-7xl mx-auto flex justify-between items-center">
       
        <h1 className="text-2xl font-bold text-purple-400">Bibash Dahal</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-lg">
          {links.map((link) => (
            <li key={link} className="hover:text-purple-400 transition duration-300 cursor-pointer">
              {link}
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-gray-800 mt-2 rounded-lg overflow-hidden"
          >
            {links.map((link) => (
              <li
                key={link}
                className="px-6 py-3 hover:bg-purple-800 hover:text-white transition-colors duration-300 cursor-pointer border-b border-gray-700 last:border-none"
              >
                {link}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
      
    </nav>
  );
}
