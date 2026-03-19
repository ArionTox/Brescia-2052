import React from 'react';

const Navbar = () => {
  return (
    <nav>
      <div className="nav-inner">
        <div className="nav-logo">Brescia 2052</div>
        <ul className="nav-links">
          <li><a href="#budget">Investimenti</a></li>
          <li><a href="#metodologia">Metodologia</a></li>
          <li><a href="#socio">Socio-politico</a></li>
          <li><a href="#economia">Economia</a></li>
          <li><a href="#infra">Infrastrutture</a></li>
          <li><a href="#eco">Ecologia</a></li>
          <li><a href="#media">Media</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
