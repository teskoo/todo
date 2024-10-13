import React from 'react';
import  Rocket from '../../assets/icons/rocket.svg';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <img src={Rocket} alt="Rocket" />
        <div>
          to<span>do</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
