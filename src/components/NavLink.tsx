import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface NavLinkProps {
  href: string;
  label: string;
}

const NavLink: React.FC<NavLinkProps> = ({ href, label }) => {
  const location = useLocation();
  const isActive = location.pathname === href;

  return (
    <Link
      to={href}
      className={`group relative px-3 py-2 ${
        isActive ? 'text-white' : 'text-gray-300'
      } hover:text-white transition-colors duration-200`}
    >
      {label}
      <span className={`absolute bottom-1 left-0 h-0.5 bg-gradient-to-r from-purple-400 to-indigo-400 transition-all duration-300 ${
        isActive ? 'w-full' : 'w-0'
      } group-hover:w-full`} />
    </Link>
  );
};

export default NavLink;