import React from 'react';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Soluções Inovadoras em Automação Industrial</h1>
        <p>A S2i - Distribuição Industrial é sua parceira especializada em automação industrial, oferecendo soluções completas e tecnologia de ponta para otimizar seus processos produtivos.</p>
        <div className="hero-buttons">
          <a href="#contact" className="btn-primary">Entre em Contato</a>
          <a href="#about" className="btn-secondary">Saiba Mais</a>
        </div>
      </div>
      <div className="hero-image">
        <div className="automation-graphic">
          <div className="gear gear-1"></div>
          <div className="gear gear-2"></div>
          <div className="gear gear-3"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
