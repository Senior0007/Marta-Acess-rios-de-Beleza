import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { totalItems } = useCart();
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path ? 'text-primary font-medium' : 'text-on-surface hover:text-primary transition-colors';
  };

  return (
    <nav className="bg-surface sticky top-0 z-50 border-b border-surface-variant">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="font-headline text-2xl font-bold text-primary">Marta</span>
              <span className="font-headline text-2xl text-on-surface ml-1">Acessórios</span>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className={isActive('/')}>Início</Link>
            <Link to="/loja" className={isActive('/loja')}>Loja</Link>
            <Link to="/entrega" className={isActive('/entrega')}>Entrega</Link>
            <a href="https://wa.me/244958182232" target="_blank" rel="noopener noreferrer" className="text-on-surface hover:text-primary transition-colors">Contacto</a>
            
            <div className="flex items-center space-x-4 border-l border-surface-variant pl-4">
              <Link to="/carrinho" className="text-on-surface hover:text-primary transition-colors relative">
                <span className="material-symbols-outlined">shopping_bag</span>
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-error text-on-error text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden space-x-4">
            <Link to="/carrinho" className="text-on-surface hover:text-primary transition-colors relative">
              <span className="material-symbols-outlined">shopping_bag</span>
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-error text-on-error text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-on-surface hover:text-primary focus:outline-none"
            >
              <span className="material-symbols-outlined">
                {isMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-surface border-b border-surface-variant">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              to="/" 
              className={`block px-3 py-2 rounded-md text-base ${location.pathname === '/' ? 'bg-primary-container text-on-primary-container' : 'text-on-surface hover:bg-surface-variant'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Início
            </Link>
            <Link 
              to="/loja" 
              className={`block px-3 py-2 rounded-md text-base ${location.pathname === '/loja' ? 'bg-primary-container text-on-primary-container' : 'text-on-surface hover:bg-surface-variant'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Loja
            </Link>
            <Link 
              to="/entrega" 
              className={`block px-3 py-2 rounded-md text-base ${location.pathname === '/entrega' ? 'bg-primary-container text-on-primary-container' : 'text-on-surface hover:bg-surface-variant'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Entrega
            </Link>
            <a 
              href="https://wa.me/244958182232" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block px-3 py-2 rounded-md text-base text-on-surface hover:bg-surface-variant"
              onClick={() => setIsMenuOpen(false)}
            >
              Contacto
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
