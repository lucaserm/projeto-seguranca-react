import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/Auth/AuthContext';

const Navbar = () => {
  const auth = useContext(AuthContext);

  const handleLogout = async () => {
    await auth.signout();
    window.location('/');
  };

  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div
        className="d-flex m-auto"
        style={{
          width: '40%',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}
      >
        <a
          className="svg"
          href="https://docs.google.com/document/d/1uOmbBmozV6uhz8EV7BhDOS4jA7DD5Jkh/edit?usp=sharing&ouid=100410927274855044421&rtpof=true&sd=true"
        >
          <svg
            className="img-fluid svg"
            width="60"
            height="60"
            viewBox="0 0 300 300"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_1_36)">
              <mask
                id="mask0_1_36"
                style={{ maskType: 'alpha' }}
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="300"
                height="300"
              >
                <circle cx="150" cy="150" r="150" fill="#D9D9D9" />
              </mask>
              <g mask="url(#mask0_1_36)">
                <rect width="300" height="300" fill="white" />
                <rect
                  x="50"
                  y="50"
                  width="200"
                  height="200"
                  fill="url(#pattern0)"
                />
              </g>
            </g>
            <defs>
              <pattern
                id="pattern0"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <use xlinkHref="#image0_1_36" transform="scale(0.005)" />
              </pattern>
              <clipPath id="clip0_1_36">
                <rect width="300" height="300" fill="white" />
              </clipPath>
              <image
                id="image0_1_36"
                width="200"
                height="200"
                xlinkHref="data:image/png;base64,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"
              />
            </defs>
          </svg>
        </a>
        <Link to="/" className="navbar-brand">
          SINMOS
        </Link>
        {!auth.user && (
          <Link to="/login">
            <button className="btn btn-outline-success me-2" type="button">
              Entrar
            </button>
          </Link>
        )}
        {auth.user && (
          <button
            className="btn btn-outline-success me-2"
            type="button"
            onClick={handleLogout}
          >
            Sair
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
