/**
 * Header component
 *
 * Top navigation bar for your site. Set to remain visible as the
 * user scrolls so that they can constantly reach any part of your page.
 */
import React, {useState} from "react";
import "./../styles.css";  

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return(
    <nav className="main-header">
      <div className="nav-logo">My Portfolio</div>

      <div className={`nav-links ${isMenuOpen ? "open" : ""}`}>
      
      <a href="#home"onClick={() => setIsMenuOpen(false)}>Home</a>
      <a href="#about"onClick={() => setIsMenuOpen(false)}>About</a>
      <a href="#portfolio"onClick={() => setIsMenuOpen(false)}>Portfolio</a>
      <a href="#footer" onClick={() => setIsMenuOpen(false)}>Contact</a>
    </div>

    <div
        className="nav-toggle"
        onClick={() => setIsMenuOpen((prev) => !prev)}
      >
        ☰
      </div>
      </nav>
  );
};

export default Header;
