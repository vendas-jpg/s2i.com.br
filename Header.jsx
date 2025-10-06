import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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

  const headerStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.9)',
    backdropFilter: 'blur(10px)',
    zIndex: 1000,
    padding: isScrolled ? '12px 0' : '16px 0',
    transition: 'all 0.3s ease',
    borderBottom: isScrolled ? '1px solid #e2e8f0' : 'none',
    boxShadow: isScrolled ? '0 4px 6px rgba(0, 0, 0, 0.05)' : 'none'
  };

  const containerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px'
  };

  const logoStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    textDecoration: 'none'
  };

  const logoTextStyle = {
    fontSize: '1.5rem',
    fontWeight: '700',
    color: '#1e293b',
    margin: 0
  };

  const navStyle = {
    display: 'flex',
    listStyle: 'none',
    margin: 0,
    padding: 0,
    gap: '32px'
  };

  const mobileNavStyle = {
    position: 'absolute',
    top: '100%',
    left: 0,
    right: 0,
    backgroundColor: 'white',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    padding: '20px',
    display: isMenuOpen ? 'block' : 'none'
  };

  const mobileNavListStyle = {
    listStyle: 'none',
    margin: 0,
    padding: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  };

  const navButtonStyle = {
    background: 'none',
    border: 'none',
    color: '#64748b',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: '500',
    padding: '8px 0',
    transition: 'color 0.3s ease',
    textDecoration: 'none'
  };

  const menuToggleStyle = {
    display: 'none',
    background: 'none',
    border: 'none',
    color: '#1e293b',
    fontSize: '24px',
    cursor: 'pointer',
    padding: '8px'
  };

  return (
    <>
      <header style={headerStyle}>
        <div style={containerStyle}>
          <a href="#home" style={logoStyle} onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>
            <div style={{
              width: '40px',
              height: '40px',
              backgroundColor: '#fbbf24',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 'bold',
              color: '#1e293b',
              fontSize: '18px'
            }}>
              S2i
            </div>
            <h1 style={logoTextStyle}>S2i Industrial</h1>
          </a>
          
          {/* Desktop Navigation */}
          <nav style={{ display: window.innerWidth > 768 ? 'block' : 'none' }}>
            <ul style={navStyle}>
              <li>
                <button 
                  onClick={() => scrollToSection('home')}
                  style={navButtonStyle}
                  onMouseOver={(e) => e.target.style.color = '#fbbf24'}
                  onMouseOut={(e) => e.target.style.color = '#64748b'}
                >
                  Início
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  style={navButtonStyle}
                  onMouseOver={(e) => e.target.style.color = '#fbbf24'}
                  onMouseOut={(e) => e.target.style.color = '#64748b'}
                >
                  Sobre
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('solutions')}
                  style={navButtonStyle}
                  onMouseOver={(e) => e.target.style.color = '#fbbf24'}
                  onMouseOut={(e) => e.target.style.color = '#64748b'}
                >
                  Soluções
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('partners')}
                  style={navButtonStyle}
                  onMouseOver={(e) => e.target.style.color = '#fbbf24'}
                  onMouseOut={(e) => e.target.style.color = '#64748b'}
                >
                  Parceiros
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  style={{
                    ...navButtonStyle,
                    backgroundColor: '#fbbf24',
                    color: '#1e293b',
                    padding: '10px 20px',
                    borderRadius: '6px',
                    fontWeight: '600'
                  }}
                  onMouseOver={(e) => e.target.style.backgroundColor = '#f59e0b'}
                  onMouseOut={(e) => e.target.style.backgroundColor = '#fbbf24'}
                >
                  Contato
                </button>
              </li>
            </ul>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={toggleMenu}
            style={{
              ...menuToggleStyle,
              display: window.innerWidth <= 768 ? 'block' : 'none'
            }}
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div style={mobileNavStyle}>
          <ul style={mobileNavListStyle}>
            <li>
              <button 
                onClick={() => scrollToSection('home')}
                style={{...navButtonStyle, width: '100%', textAlign: 'left'}}
              >
                Início
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('about')}
                style={{...navButtonStyle, width: '100%', textAlign: 'left'}}
              >
                Sobre
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('solutions')}
                style={{...navButtonStyle, width: '100%', textAlign: 'left'}}
              >
                Soluções
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('partners')}
                style={{...navButtonStyle, width: '100%', textAlign: 'left'}}
              >
                Parceiros
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('contact')}
                style={{
                  ...navButtonStyle,
                  width: '100%',
                  textAlign: 'left',
                  backgroundColor: '#fbbf24',
                  color: '#1e293b',
                  padding: '12px 16px',
                  borderRadius: '6px',
                  fontWeight: '600',
                  marginTop: '8px'
                }}
              >
                Contato
              </button>
            </li>
          </ul>
        </div>
      </header>
      
      {/* Spacer to prevent content from hiding behind fixed header */}
      <div style={{ height: isScrolled ? '70px' : '80px' }}></div>
    </>
  );
};

export default Header;
