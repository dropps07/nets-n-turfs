
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-black border-b border-border py-2">
      <div className="container mx-auto px-2 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-1">          
          <img src="/logo.png" alt="Logo" className="h-24 w-24" /> 
          <span className="font-bold text-xl text-white">Nets-n-Turfs</span>
        </Link>
        
        <div className="hidden md:flex space-x-3">
          <Link to="/" className="text-white hover:text-sports-green transition-colors">
            Home
          </Link>
          <Link to="/" className="text-white hover:text-sports-green transition-colors">
            Explore
          </Link>
          <Link to="/" className="text-white hover:text-sports-green transition-colors">
            About
          </Link>
        </div>
        
        <button className="btn-sports">
          Sign In
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
