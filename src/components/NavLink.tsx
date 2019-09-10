import React from 'react';

interface NavLinkProps {
  href: string;
}

const NavLink: React.FC<NavLinkProps> = props => {
  const { children, href } = props;
  return (
    <a
      href={href}
      className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-2"
    >
      {children}
    </a>
  );
};

export default NavLink;
