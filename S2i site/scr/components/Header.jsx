import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      // Fecha o menu ao redimensionar para desktop
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };

    // Inicializa
    handleResize();
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="header-container">
          <a 
            href="#home" 
            className="logo-link" 
            onClick={(e) => { 
              e.preventDefault(); 
              scrollToSection('home'); 
            }}
          >
            <div className="logo-icon">S2i</div>
            <h1 className="logo-text">S2i Industrial</h1>
          </a>
          
          {/* Desktop Navigation */}
          {!isMobile && (
            <nav className="nav-desktop">
              <ul>
                <li>
                  <button onClick={() => scrollToSection('home')}>
                    Início
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('about')}>
                    Sobre
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('solutions')}>
                    Soluções
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('partners')}>
                    Parceiros
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('contact')}
                    className="btn-contact"
                  >
                    Contato
                  </button>
                </li>
              </ul>
            </nav>
          )}

          {/* Mobile Menu Toggle */}
          {isMobile && (
            <button 
              onClick={toggleMenu}
              className="menu-toggle"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? '✕' : '☰'}
            </button>
          )}
        </div>

        {/* Mobile Navigation */}
        {isMobile && isMenuOpen && (
          <nav className="nav-mobile">
            <ul>
              <li>
                <button onClick={() => scrollToSection('home')}>
                  Início
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('about')}>
                  Sobre
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('solutions')}>
                  Soluções
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('partners')}>
                  Parceiros
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="btn-contact-mobile"
                >
                  Contato
                </button>
              </li>
            </ul>
          </nav>
        )}
      </header>
      
      {/* Spacer to prevent content from hiding behind fixed header */}
      <div className="header-spacer"></div>
    </>
  );
};

export default Header;