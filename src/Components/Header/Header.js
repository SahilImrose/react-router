import React from 'react';

const Header = () => {
    return (<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">Home</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
    );
};

export default Header;