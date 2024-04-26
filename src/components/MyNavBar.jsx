import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBell, faUser, faBars } from '@fortawesome/free-solid-svg-icons';
import { Dropdown } from 'react-bootstrap'; //Importo sia i loghi con fortawesome che la struttura di bootstrap
import logo from './assets/logo.png';  //logo netflix

const Navbar = () => {        //primo lavoro sulla navbar
  const [activeLink, setActiveLink] = useState('home'); //vado a definire con usestate lo stato attivo di home
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [showMobileDropdown, setShowMobileDropdown] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => { //uso useEffect cosi da controllare la risposta del browser
    const handleResize = () => setWindowWidth(window.innerWidth); //ad esempio al interno della funzione ho controllato effeti come i remove 
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleMouseOver = (link) => {
    setActiveLink(link);
  };

  const handleMouseOut = () => {
    setActiveLink('home');
  };

  const handleProfileClick = () => {
    setShowProfileDropdown(!showProfileDropdown);
  };

  const handleMobileDropdown = () => {
    setShowMobileDropdown(!showMobileDropdown);
  };

  return ( //struttura
    <nav className="navbar" style={{ display: 'flex', alignItems: 'center' }}> {/*  usando bootstrap mi creo la navbar per prima cosa con un display flex cosi da poter mettere i componenti sulla sterssa riga*/}
      <div className="navbar-logo">
        <img src={logo} alt="Logo" style={{ width: 150 }} />   {/* mi chiamo il Logo e do una width sennò mi occupava tutto lo schermo*/}
      </div>
      <ul className="navbar-links" style={{ listStyleType: 'none', padding: 0, marginRight: 'auto' }}>
        <li style={{ display: 'inline', marginRight: '20px' }}>         {/* Do gli stili inline a home ecc ovviamente levando tutte le decorazioni e dandole un margin right per spingerle vicino al logo*/}
          <a href="d" 
             onMouseOver={() => handleMouseOver('home')}
             onMouseOut={handleMouseOut}
             style={{ opacity: activeLink === 'home' ? 1 : 0.7, textDecoration: 'none', color: 'white' }}>Home</a>
        </li>
        <li style={{ display: 'inline', marginRight: '20px' }}>
          <a href="d" 
             onMouseOver={() => handleMouseOver('Tv shows')}
             onMouseOut={handleMouseOut}
             style={{ opacity: activeLink === 'Tv shows' ? 1 : 0.7, textDecoration: 'none', color: 'white' }}>Tv shows</a>
        </li>
        <li style={{ display: 'inline', marginRight: '20px' }}>
          <a href="d" 
             onMouseOver={() => handleMouseOver('Movies')}
             onMouseOut={handleMouseOut}
             style={{ opacity: activeLink === 'Movies' ? 1 : 0.7, textDecoration: 'none', color: 'white' }}>Movies</a>
        </li>
        <li style={{ display: 'inline', marginRight: '20px' }}>
          <a href="d" 
             onMouseOver={() => handleMouseOver('Recently Added')}
             onMouseOut={handleMouseOut}
             style={{ opacity: activeLink === 'Recently Added' ? 1 : 0.7, textDecoration: 'none', color: 'white' }}>Recently Added</a>
        </li>
      </ul>
      <ul className="navbar-icons" style={{ listStyleType: 'none', padding: 0, display: 'flex', alignItems: 'center', marginRight: '30px' }}>     {/* Ora creo le icone attraverso il mio import le spazio e le spingo a destra */}
        <li style={{ marginRight: '20px' }}>
          <FontAwesomeIcon icon={faSearch} style={{ color: 'white', fontSize: '18px', cursor: 'pointer' }} />
        </li>
        <li style={{ marginRight: '20px', cursor: 'pointer' }}>
          <span style={{ color: 'white', marginRight: '5px' }}>Kids</span>
        </li>
        <li style={{ marginRight: '20px' }}>
          <FontAwesomeIcon icon={faBell} style={{ color: 'white', fontSize: '18px', cursor: 'pointer' }} />
        </li>
        <li style={{ cursor: 'pointer' }} onClick={handleProfileClick}>
          <FontAwesomeIcon icon={faUser} style={{ color: 'white', fontSize: '18px' }} />
        </li>
      </ul>
     {/*Gestisco il drop down sulla icona del profilo */}
      <Dropdown show={showMobileDropdown} onClick={handleMobileDropdown}>
        <Dropdown.Toggle style={{ backgroundColor: '', border: 'none', display: (windowWidth <= 671 && windowWidth >= 300) ? 'block' : 'none' }} id="dropdown-basic">
          <FontAwesomeIcon icon={faBars} style={{ color: 'white', fontSize: '18px' }} />
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/home">Home</Dropdown.Item>
          <Dropdown.Item href="#/tv-shows">Tv shows</Dropdown.Item>
          <Dropdown.Item href="#/movies">Movies</Dropdown.Item>
          <Dropdown.Item href="#/recently-added">Recently Added</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
   
      <style>                {/*Non riuscendo a mettere in colonna l intera navbar ho creato un dropdown personalizzato che va a raccogliere i valori home ecc */}
        {`
          @media (max-width: 671px) and (min-width: 300px) {
            .navbar-links,
            .navbar-icons {
              display: none;
            }

            .navbar-logo {
              margin-right: auto;
            }
          }
        `}
      </style>
    </nav>
  );
}

export default Navbar; //esporto in app.jsx