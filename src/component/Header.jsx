import React from 'react';


function Header() {
  return (
    <header className="header-container">
      <h1 className="logo">Todo</h1>
      <nav className="nav-menu">
        <ul className="nav-list">
          <li className="nav-item"><a href="/">Home</a></li>
          <li className="nav-item"><a href="">About</a></li>
          <li className="nav-item"><a href="">Services</a></li>
          <li className="nav-item"><a href="/login">Logout</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
