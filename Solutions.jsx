import React from 'react';

const Solutions = () => {
  const solutions = [
    {
      title: "Automação de Processos",
      description: "Sistemas completos de automação para otimização de processos industriais",
      features: ["PLCs e Controladores", "Sistemas SCADA", "Redes Industriais", "Integração de Sistemas"]
    },
    {
      title: "Instrumentação Industrial",
      description: "Equipamentos de medição e controle para monitoramento preciso",
      features: ["Sensores e Transmissores", "Válvulas de Controle", "Analisadores", "Sistemas de Medição"]
    },
    {
      title: "Sistemas de Segurança",
      description: "Soluções em segurança funcional para proteção de pessoas e equipamentos",
      features: ["Sistemas SIS", "Detectores de Gás", "Sistemas de Parada de Emergência", "Análise de Riscos"]
    },
    {
      title: "Manutenção e Suporte",
      description: "Serviços especializados para manter seus sistemas funcionando perfeitamente",
      features: ["Manutenção Preventiva", "Calibração", "Treinamento Técnico", "Suporte 24/7"]
    }
  ];

  return (
    <section id="solutions" className="solutions">
      <div className="container">
        <div className="section-header">
          <h2>Nossas Soluções</h2>
          <p>Tecnologia avançada para automação industrial completa</p>
        </div>
        
        <div className="solutions-grid">
          {solutions.map((solution, index) => (
            <div key={index} className="solution-card">
              <h3>{solution.title}</h3>
              <p>{solution.description}</p>
              <ul>
                {solution.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>{feature}</li>
                ))}
              </ul>
              <a href="#contact" className="solution-link">Saiba Mais</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
