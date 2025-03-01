import "./Nosotros.css";

const Nosotros = () => {
  return (
    <div className="container-nosotros">
      <header className="header-nosotros">
        <h1 className="main-title-nosotros">Sobre Nosotros</h1>
      </header>
      
      <div className="about">
        <h2 className="h2-nosotros">Nuestra Historia</h2>
        <p>Somos una tienda dedicada a brindar productos innovadoras para nuestros clientes. Desde nuestros inicios, hemos trabajado con pasión y compromiso para alcanzar la excelencia.</p>
      </div>

      <div className="mission">
        <h2 className="h2-nosotros">Nuestra Misión</h2>
        <p>Proporcionar productos de alta calidad que superen las expectativas de nuestros clientes.</p>
      </div>

      <div className="team">
        <h2 className="h2-nosotros">Nuestro Equipo</h2>
        <p>Contamos con un equipo altamente capacitado y comprometido con la innovación y el servicio al cliente.</p>
      </div>

    </div>
  )
};

export default Nosotros;