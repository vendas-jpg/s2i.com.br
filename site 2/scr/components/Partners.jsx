import React from "react";

const partners = ["Banner", "Wago", "Pizzato", "Tuck"];

function Partners() {
  return (
    <section id="partners" className="partners">
      <h2>Marcas Parceiras</h2>
      <div className="partners-list">
        {partners.map((brand) => (
          <div key={brand} className="partner-card">
            <div className="logo-placeholder">{brand}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Partners;
