import { Outlet, Link } from 'react-router-dom';
import React from 'react';

const Nav = () => {
  return (
    <>
      <nav>
        <ul
          style={{
            listStyle: 'none',
          }}
        >
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/PageOne">Profiles</Link>
          </li>
          <li>
            <Link to="/PageTwo">Hits</Link>
          </li>
          <li>
            <Link to="/PageThree">Playlists</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Nav;
