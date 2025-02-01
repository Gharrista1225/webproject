import React from 'react';
import { Search, ShoppingCart, User, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const { state } = useCart();
  const itemCount = state.items.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Menu className="h-6 w-6 mr-4 lg:hidden" />
            <Link to="/" className="text-3xl font-serif font-bold text-gray-800">Gharista</Link>
          </div>
          
          <div className="hidden lg:flex space-x-8">
            <Link to="/" className="text-gray-600 hover:text-gray-900">Home</Link>
            <Link to="/category/wall-art" className="text-gray-600 hover:text-gray-900">Shop</Link>
            <Link to="/about" className="text-gray-600 hover:text-gray-900">About</Link>
            <a href="#" className="text-gray-600 hover:text-gray-900">Collections</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Contact</a>
          </div>

          <div className="flex items-center space-x-6">
            <Search className="h-5 w-5 text-gray-600 cursor-pointer" />
            <User className="h-5 w-5 text-gray-600 cursor-pointer" />
            <Link to="/cart" className="relative">
              <ShoppingCart className="h-5 w-5 text-gray-600 hover:text-gray-900" />
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-amber-600 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;