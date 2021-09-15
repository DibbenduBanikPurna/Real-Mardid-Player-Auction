import React from 'react';
import { Link } from 'react-router-dom';
// import Logo from '../../Images/1f446f2229f0bb8ffa892b82eebafb75.gif'
const Navbar = () => {
    return (
        

        
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <Link className="navbar-brand m-2" to="/"><img className="img-fluid " style={{height:'80px',width:'80px'}} src="https://2.bp.blogspot.com/-WWgiU2SttmU/U94BWnX8rmI/AAAAAAAACyE/d69rWU-WD9c/s1600/LOGO+MADRID.gif" alt=" "/></Link>
  
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav m-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="/">Home </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/live">Live</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/match-info">La-Liga Point Table</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/match-highlight">Match-Highlight</Link>
      </li>
    </ul>
  </div>
</nav>

    );
};

export default Navbar;