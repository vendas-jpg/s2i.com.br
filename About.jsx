import React from 'react';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <h2>Sobre a S2i</h2>
          <p>Especialistas em automação industrial com foco em inovação e qualidade</p>
        </div>
        
        <div className="about-content">
          <div className="about-text">
            <h3>Nossa Missão</h3>
            <p>
              A S2i - Distribuição Industrial atua no mercado de automação industrial, 
              fornecendo soluções tecnológicas avançadas que aumentam a eficiência e 
              produtividade dos nossos clientes.
            </p>
            
            <h3>Nossa Experiência</h3>
            <p>
              Com anos de experiência no setor, oferecemos consultoria especializada, 
              implementação de sistemas de automação e suporte técnico completo para 
              indústrias de diversos segmentos.
            </p>
            
            <div className="about-stats">
              <div className="stat">
                <h4>7+</h4>
                <p>Estados Atendidos</p>
              </div>
              <div className="stat">
                <h4>100+</h4>
                <p>Projetos Realizados</p>
              </div>
              <div className="stat">
                <h4>24/7</h4>
                <p>Suporte Técnico</p>
              </div>
            </div>
          </div>
          
          <div className="about-features">
            <div className="feature">
              <div className="feature-icon">🔧</div>
              <h4>Consultoria Especializada</h4>
              <p>Análise completa das necessidades do seu processo produtivo</p>
            </div>
            
            <div className="feature">
              <div className="feature-icon">⚙️</div>
              <h4>Implementação Completa</h4>
              <p>Instalação e configuração de sistemas de automação</p>
            </div>
            
            <div className="feature">
              <div className="feature-icon">🛠️</div>
              <h4>Suporte Técnico</h4>
              <p>Manutenção preventiva e corretiva especializada</p>
            </div>
            
            <div className="feature">
              <div className="feature-icon">📈</div>
              <h4>Otimização de Processos</h4>
              <p>Melhoria contínua da eficiência produtiva</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
