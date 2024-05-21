
import React/*, { useState }*/ from 'react';
import PropTypes from 'prop-types';

export default function Navbar(props) {

 /* const toggleMode = () => {
    if (props.mode === 'dark') {
      setMode('light');
      setModetxt("enable light mode");
      document.body.style.backgroundColor = 'white';
    } else {
      setMode('dark');
      setModetxt("disable dark mode");
      document.body.style.backgroundColor = '#042743';
    }
  }*/

  return (
    <>
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">{props.forhome}</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">{props.AboutText}</a>
            </li> 
          </ul>
          <div className={`form-check form-switch text-${props.mode === 'light' ? 'grey' : 'light'}`}>
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode} />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.modetxt}</label>
          </div>
        </div>
      </div>
    </nav>
    </>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  AboutText: PropTypes.string.isRequired,
  forhome: PropTypes.string
};

Navbar.defaultProps = {
  title: "Set title here",
  AboutText: 'please',
  forhome: 'enter text here'
};

