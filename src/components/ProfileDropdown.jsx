import React, { useEffect, useRef, useState } from 'react';
import '../styles/NavBar.css'; 

const NavBar = () => {
  const [menuActive, setMenuActive] = useState(false);
  const navRef = useRef(null);

  const toggleMenu = () => {
    setMenuActive((prevState) => !prevState);
  };

  const handleClickOutside = (event) => {
    if (navRef.current && !navRef.current.contains(event.target)) {
      setMenuActive(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className='profile-dropdown-nav' ref={navRef}>
      <div className="profile" onClick={toggleMenu}>
        <div className="user">
          <h3>Katherine Cooper</h3>
          <p>@probablykat66</p>
        </div>
        <div className="img-box">
          <img src="https://i.postimg.cc/BvNYhMHS/user-img.jpg" alt="some user image" />
        </div>
      </div>
      <div className={`menu ${menuActive ? 'active' : ''}`}>
        <ul>
          <li><a href="#"><i className="ph-bold ph-user"></i>&nbsp;Profile</a></li>
          <li><a href="#"><i className="ph-bold ph-envelope-simple"></i>&nbsp;Inbox</a></li>
          <li><a href="#"><i className="ph-bold ph-gear-six"></i>&nbsp;Settings</a></li>
          <li><a href="#"><i className="ph-bold ph-question"></i>&nbsp;Help</a></li>
          <li><a href="#"><i className="ph-bold ph-sign-out"></i>&nbsp;Sign Out</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
