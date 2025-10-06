import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <img src="/logo.png" alt="S2i - Distribuição Industrial" />
              <h3>S2i - Distribuição Industrial</h3>
            </div>
            <p>Especialistas em automação industrial, oferecendo soluções completas e tecnologia de ponta para otimizar processos produtivos.</p>
          </div>
          
          <div className="footer-section">
            <h4>Serviços</h4>
            <ul>
              <li><a href="#solutions">Automação de Processos</a></li>
              <li><a href="#solutions">Instrumentação Industrial</a></li>
              <li><a href="#solutions">Sistemas de Segurança</a></li>
              <li><a href="#solutions">Manutenção e Suporte</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Empresa</h4>
            <ul>
              <li><a href="#about">Sobre Nós</a></li>
              <li><a href="#partners">Parceiros</a></li>
              <li><a href="#contact">Contato</a></li>
              <li><a href="#contact">Área de Cobertura</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Contato</h4>
            <div className="contact-info">
              <p>📍 Goiânia - GO, Brasil</p>
              <p>📞 (62) 98116-4440</p>
              <p>✉️ contato@s2i.com.br</p>
              <a 
                href="https://wa.me/5562981164440" 
                target="_blank" 
                rel="noopener noreferrer"
                className="whatsapp-footer"
              >
                💬 WhatsApp
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-divider"></div>
          <div className="footer-bottom-content">
            <p>&copy; 2024 S2i - Distribuição Industrial. Todos os direitos reservados.</p>
            <div className="footer-links">
              <a href="#privacy">Política de Privacidade</a>
              <a href="#terms">Termos de Uso</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
