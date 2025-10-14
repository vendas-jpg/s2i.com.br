import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', company: '', message: ''
  });
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const coverageStates = ['MS', 'MT', 'RO', 'GO', 'MG', 'TO', 'PA'];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('Enviando...');
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setStatus('✅ Mensagem enviada com sucesso!');
      setFormData({ name: '', email: '', phone: '', company: '', message: '' });
    } catch (error) {
      setStatus('❌ Erro ao enviar mensagem.');
    } finally {
      setIsSubmitting(false);
    }
  };

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
              <a href="https://wa.me/5562981164440" target="_blank" rel="noopener noreferrer" className="whatsapp-link">💬 WhatsApp</a>
            </div>
            <div className="contact-item">
              <h3>✉️ E-mail</h3>
              <p>contato@s2i.com.br</p>
            </div>
            <div className="contact-item">
              <h3>🕐 Horário de Atendimento</h3>
              <p>Segunda a Sexta: 8h às 18h<br />Sábado: 8h às 12h</p>
            </div>
          </div>
          <div className="coverage-area">
            <h3>Área de Cobertura</h3>
            <p>Atendemos os seguintes estados:</p>
            <div className="brazil-map">
              <svg viewBox="0 0 400 300" className="map-svg">
                <path d="M50 50 L350 50 L350 250 L50 250 Z" fill="#f0f0f0" stroke="#ccc" strokeWidth="1"/>
                <rect x="120" y="180" width="40" height="30" fill="#fbbf24" stroke="#999" strokeWidth="1"/>
                <text x="140" y="198" textAnchor="middle" fontSize="10" fill="#333">MS</text>
                <rect x="120" y="140" width="50" height="40" fill="#fbbf24" stroke="#999" strokeWidth="1"/>
                <text x="145" y="163" textAnchor="middle" fontSize="10" fill="#333">MT</text>
                <rect x="80" y="120" width="35" height="25" fill="#fbbf24" stroke="#999" strokeWidth="1"/>
                <text x="97" y="135" textAnchor="middle" fontSize="10" fill="#333">RO</text>
                <rect x="180" y="160" width="40" height="35" fill="#fbbf24" stroke="#999" strokeWidth="1"/>
                <text x="200" y="180" textAnchor="middle" fontSize="10" fill="#333">GO</text>
                <rect x="220" y="180" width="50" height="40" fill="#fbbf24" stroke="#999" strokeWidth="1"/>
                <text x="245" y="203" textAnchor="middle" fontSize="10" fill="#333">MG</text>
                <rect x="180" y="110" width="35" height="45" fill="#fbbf24" stroke="#999" strokeWidth="1"/>
                <text x="197" y="135" textAnchor="middle" fontSize="10" fill="#333">TO</text>
                <rect x="140" y="70" width="60" height="35" fill="#fbbf24" stroke="#999" strokeWidth="1"/>
                <text x="170" y="90" textAnchor="middle" fontSize="10" fill="#333">PA</text>
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
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Nome completo *</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="email">E-mail *</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Telefone *</label>
              <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="company">Empresa</label>
              <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="message">Descreva seu projeto *</label>
              <textarea id="message" name="message" rows="5" value={formData.message} onChange={handleChange} required></textarea>
            </div>
            <button type="submit" className="btn-primary" disabled={isSubmitting}>
              {isSubmitting ? 'Enviando...' : 'Enviar Solicitação'}
            </button>
            {status && <p className={`form-status ${status.includes('❌') ? 'error' : 'success'}`}>{status}</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;