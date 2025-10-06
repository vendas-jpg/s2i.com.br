import React from 'react';

const Partners = () => {
  const partners = [
    {
      name: "Schneider Electric",
      logo: "/api/placeholder/150/80",
      website: "https://www.schneider-electric.com.br",
      description: "Líder mundial em gestão de energia e automação"
    },
    {
      name: "Siemens",
      logo: "/api/placeholder/150/80",
      website: "https://www.siemens.com.br",
      description: "Tecnologia de automação e digitalização industrial"
    },
    {
      name: "ABB",
      logo: "/api/placeholder/150/80",
      website: "https://www.abb.com.br",
      description: "Soluções em eletrificação e automação"
    },
    {
      name: "Rockwell Automation",
      logo: "/api/placeholder/150/80",
      website: "https://www.rockwellautomation.com.br",
      description: "Automação industrial e informação"
    },
    {
      name: "Emerson",
      logo: "/api/placeholder/150/80",
      website: "https://www.emerson.com.br",
      description: "Tecnologia e engenharia para automação"
    },
    {
      name: "Honeywell",
      logo: "/api/placeholder/150/80",
      website: "https://www.honeywell.com.br",
      description: "Soluções de controle e automação de processos"
    }
  ];

  return (
    <section id="partners" className="partners">
      <div className="container">
        <div className="section-header">
          <h2>Nossos Parceiros</h2>
          <p>Trabalhamos com as principais marcas do mercado de automação industrial</p>
        </div>
        
        <div className="partners-grid">
          {partners.map((partner, index) => (
            <div key={index} className="partner-card">
              <a href={partner.website} target="_blank" rel="noopener noreferrer">
                <div className="partner-logo">
                  <img src={partner.logo} alt={partner.name} />
                </div>
                <div className="partner-info">
                  <h3>{partner.name}</h3>
                  <p>{partner.description}</p>
                </div>
              </a>
            </div>
          ))}
        </div>
        
        <div className="partners-benefits">
          <h3>Vantagens da Nossa Parceria</h3>
          <div className="benefits-grid">
            <div className="benefit">
              <h4>Produtos Originais</h4>
              <p>Garantia de autenticidade e qualidade</p>
            </div>
            <div className="benefit">
              <h4>Suporte Técnico</h4>
              <p>Acesso direto ao suporte dos fabricantes</p>
            </div>
            <div className="benefit">
              <h4>Treinamentos</h4>
              <p>Capacitação técnica especializada</p>
            </div>
            <div className="benefit">
              <h4>Atualizações</h4>
              <p>Acesso às últimas tecnologias</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
