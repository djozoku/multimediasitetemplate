import React from 'react';
import { Link } from 'react-router-dom';

interface NavLinkProps {
  href: string;
}

const NavLink: React.FC<NavLinkProps> = props => {
  const { children, href } = props;
  return (
    <Link
      to={href}
      className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-2"
    >
      {children}
    </Link>
  );
};

export default NavLink;
