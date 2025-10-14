import React from "react";
import Header from "./components/Header";
import Partners from "./components/Partners";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <section className="intro">
          <h2>Bem-vindo à S2i Distribuição Industrial</h2>
          <p>Fornecemos soluções e equipamentos industriais de alta qualidade.</p>
        </section>
        <Partners />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
