import React from 'react';

const Contact = () => {
  const coverageStates = ['MS', 'MT', 'RO', 'GO', 'MG', 'TO', 'PA'];

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <h2>Entre em Contato</h2>
          <p>Estamos prontos para atender suas necessidades em automação industrial</p>
        </div>
        
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <h3>📍 Endereço</h3>
              <p>Goiânia - GO<br />Brasil</p>
            </div>
            
            <div className="contact-item">
              <h3>📞 Telefone</h3>
              <p>(62) 98116-4440</p>
              <a 
                href="https://wa.me/5562981164440" 
                target="_blank" 
                rel="noopener noreferrer"
                className="whatsapp-link"
              >
                💬 WhatsApp
              </a>
            </div>
            
            <div className="contact-item">
              <h3>✉️ E-mail</h3>
              <p>contato@s2i.com.br</p>
            </div>
            
            <div className="contact-item">
              <h3>🕒 Horário de Atendimento</h3>
              <p>Segunda a Sexta: 8h às 18h<br />Sábado: 8h às 12h</p>
            </div>
          </div>
          
          <div className="coverage-area">
            <h3>Área de Cobertura</h3>
            <p>Atendemos os seguintes estados:</p>
            
            <div className="brazil-map">
              <svg viewBox="0 0 400 300" className="map-svg">
                {/* Brazil outline */}
                <path
                  d="M50 50 L350 50 L350 250 L50 250 Z"
                  fill="#f0f0f0"
                  stroke="#ccc"
                  strokeWidth="1"
                />
                
                {/* Mato Grosso do Sul (MS) - Southwest */}
                <rect
                  x="120"
                  y="180"
                  width="40"
                  height="30"
                  fill={coverageStates.includes('MS') ? '#ffd700' : '#e0e0e0'}
                  stroke="#999"
                  strokeWidth="1"
                  className="state-ms"
                />
                <text x="140" y="198" textAnchor="middle" fontSize="10" fill="#333">MS</text>
                
                {/* Mato Grosso (MT) - Center-West */}
                <rect
                  x="120"
                  y="140"
                  width="50"
                  height="40"
                  fill={coverageStates.includes('MT') ? '#ffd700' : '#e0e0e0'}
                  stroke="#999"
                  strokeWidth="1"
                  className="state-mt"
                />
                <text x="145" y="163" textAnchor="middle" fontSize="10" fill="#333">MT</text>
                
                {/* Rondônia (RO) - Northwest */}
                <rect
                  x="80"
                  y="120"
                  width="35"
                  height="25"
                  fill={coverageStates.includes('RO') ? '#ffd700' : '#e0e0e0'}
                  stroke="#999"
                  strokeWidth="1"
                  className="state-ro"
                />
                <text x="97" y="135" textAnchor="middle" fontSize="10" fill="#333">RO</text>
                
                {/* Goiás (GO) - Center */}
                <rect
                  x="180"
                  y="160"
                  width="40"
                  height="35"
                  fill={coverageStates.includes('GO') ? '#ffd700' : '#e0e0e0'}
                  stroke="#999"
                  strokeWidth="1"
                  className="state-go"
                />
                <text x="200" y="180" textAnchor="middle" fontSize="10" fill="#333">GO</text>
                
                {/* Minas Gerais (MG) - Southeast */}
                <rect
                  x="220"
                  y="180"
                  width="50"
                  height="40"
                  fill={coverageStates.includes('MG') ? '#ffd700' : '#e0e0e0'}
                  stroke="#999"
                  strokeWidth="1"
                  className="state-mg"
                />
                <text x="245" y="203" textAnchor="middle" fontSize="10" fill="#333">MG</text>
                
                {/* Tocantins (TO) - North-Center */}
                <rect
                  x="180"
                  y="110"
                  width="35"
                  height="45"
                  fill={coverageStates.includes('TO') ? '#ffd700' : '#e0e0e0'}
                  stroke="#999"
                  strokeWidth="1"
                  className="state-to"
                />
                <text x="197" y="135" textAnchor="middle" fontSize="10" fill="#333">TO</text>
                
                {/* Pará (PA) - North */}
                <rect
                  x="140"
                  y="70"
                  width="60"
                  height="35"
                  fill={coverageStates.includes('PA') ? '#ffd700' : '#e0e0e0'}
                  stroke="#999"
                  strokeWidth="1"
                  className="state-pa"
                />
                <text x="170" y="90" textAnchor="middle" fontSize="10" fill="#333">PA</text>
                
                {/* Other states (not covered) */}
                {/* São Paulo (SP) - Southeast */}
                <rect
                  x="240"
                  y="220"
                  width="35"
                  height="25"
                  fill="#e0e0e0"
                  stroke="#999"
                  strokeWidth="1"
                />
                <text x="257" y="235" textAnchor="middle" fontSize="9" fill="#666">SP</text>
                
                {/* Rio de Janeiro (RJ) - Southeast */}
                <rect
                  x="275"
                  y="225"
                  width="25"
                  height="20"
                  fill="#e0e0e0"
                  stroke="#999"
                  strokeWidth="1"
                />
                <text x="287" y="237" textAnchor="middle" fontSize="9" fill="#666">RJ</text>
                
                {/* Bahia (BA) - Northeast */}
                <rect
                  x="250"
                  y="140"
                  width="45"
                  height="40"
                  fill="#e0e0e0"
                  stroke="#999"
                  strokeWidth="1"
                />
                <text x="272" y="163" textAnchor="middle" fontSize="9" fill="#666">BA</text>
              </svg>
            </div>
            
            <div className="states-list">
              <h4>Estados Atendidos:</h4>
              <ul>
                <li>Mato Grosso do Sul (MS)</li>
                <li>Mato Grosso (MT)</li>
                <li>Rondônia (RO)</li>
                <li>Goiás (GO)</li>
                <li>Minas Gerais (MG)</li>
                <li>Tocantins (TO)</li>
                <li>Pará (PA)</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="contact-form">
          <h3>Solicite um Orçamento</h3>
          <form>
            <div className="form-group">
              <input type="text" placeholder="Nome completo" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="E-mail" required />
            </div>
            <div className="form-group">
              <input type="tel" placeholder="Telefone" required />
            </div>
            <div className="form-group">
              <input type="text" placeholder="Empresa" />
            </div>
            <div className="form-group">
              <textarea placeholder="Descreva seu projeto ou necessidade" rows="5" required></textarea>
            </div>
            <button type="submit" className="btn-primary">Enviar Solicitação</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
