import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import themeContext, { colors } from '../Theme';
import NavLink from './NavLink';

interface NavbarProps {
  title: string;
}

const Navbar: React.FC<NavbarProps> = props => {
  const theme = useContext(themeContext);
  const { title, children } = props;
  return (
    <>
      <nav className={`flex items-center justify-between flex-wrap p-4 bg-${'blue-600'}`}>
        <div className="flex items-center flex-shrink-0 text-white sm:mx-10 md:mx-80">
          <span className="font-semibold text-xl tracking-tight">
            <Link to="/">{title}</Link>
          </span>
        </div>
        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div style={{ margin: '0px 500px' }}>
          <div className="text-sm lg:flex-grow">{children}</div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
