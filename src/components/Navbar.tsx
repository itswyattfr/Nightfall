import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { FaCrown } from 'react-icons/fa';
import NavLink from './NavLink';
import { useAuth } from '../context/AuthContext';
import { LoginForm, RegisterForm } from './AuthForms';

const Navbar = () => {
  const { user, logout } = useAuth();
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  const handleLogout = async () => {
    await logout();
    setIsProfileOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isProfileOpen && !target.closest('.dropdown-container')) {
        setIsProfileOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isProfileOpen]);

  return (
    <>
      <nav className="bg-gray-900/80 backdrop-blur-md fixed w-full top-0 z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <Link to="/" className="text-xl font-semibold bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
                Nightfall Studios
              </Link>
            </div>

            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
              <div className="flex space-x-12">
                <NavLink href="/" label="Home" />
                <NavLink href="/projects" label="Projects" />
                <NavLink href="/about" label="About" />
              </div>
            </div>

            <div className="hidden md:block">
              {user ? (
                <div className="dropdown-container relative">
                  <button
                    onClick={() => setIsProfileOpen(!isProfileOpen)}
                    className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    <span>{user.username}</span>
                    {user.nightfallplus && <FaCrown className="h-5 w-5 text-yellow-400" />}
                    <ChevronDown className="h-4 w-4" />
                  </button>
                  {isProfileOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg py-1">
                      <Link
                        to="/account"
                        className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-700 transition-colors duration-200"
                      >
                        Account Management
                      </Link>
                      <button
                        onClick={handleLogout}
                        className="block w-full text-left px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-700 transition-colors duration-200"
                      >
                        Sign Out
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <div className="flex space-x-4">
                  <button
                    onClick={() => setShowLoginModal(true)}
                    className="text-gray-300 hover:text-white px-3 py-2"
                  >
                    Login
                  </button>
                  <button
                    onClick={() => setShowRegisterModal(true)}
                    className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
                  >
                    Sign Up
                  </button>
                </div>
              )}
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-md hover:bg-gray-800 transition-colors"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6 text-gray-300" />
                ) : (
                  <Menu className="w-6 h-6 text-gray-300" />
                )}
              </button>
            </div>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link to="/" className="block px-3 py-2 text-gray-300 hover:bg-gray-800 rounded-md">Home</Link>
              <Link to="/projects" className="block px-3 py-2 text-gray-300 hover:bg-gray-800 rounded-md">Projects</Link>
              <Link to="/about" className="block px-3 py-2 text-gray-300 hover:bg-gray-800 rounded-md">About</Link>
              {!user && (
                <>
                  <button
                    onClick={() => setShowLoginModal(true)}
                    className="block w-full text-left px-3 py-2 text-gray-300 hover:bg-gray-800 rounded-md"
                  >
                    Login
                  </button>
                  <button
                    onClick={() => setShowRegisterModal(true)}
                    className="block w-full text-left px-3 py-2 text-gray-300 hover:bg-gray-800 rounded-md"
                  >
                    Sign Up
                  </button>
                </>
              )}
              {user && (
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-3 py-2 text-gray-300 hover:bg-gray-800 rounded-md"
                >
                  Sign out
                </button>
              )}
            </div>
          </div>
        )}
      </nav>

      {showLoginModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-gray-900 p-8 rounded-lg w-full max-w-md">
            <h2 className="text-2xl font-bold text-white mb-6">Login</h2>
            <LoginForm onClose={() => setShowLoginModal(false)} />
            <button
              onClick={() => setShowLoginModal(false)}
              className="mt-4 text-gray-400 hover:text-white"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {showRegisterModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-gray-900 p-8 rounded-lg w-full max-w-md">
            <h2 className="text-2xl font-bold text-white mb-6">Sign Up</h2>
            <RegisterForm onClose={() => setShowRegisterModal(false)} />
            <button
              onClick={() => setShowRegisterModal(false)}
              className="mt-4 text-gray-400 hover:text-white"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;