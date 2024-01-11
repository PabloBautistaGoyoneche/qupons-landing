import "./css/header.css";

function Header() {
  return (
    <>
      <header>
        <div className="container">
          <nav class="navbar navbar-expand-lg navbar-light">
            <div class="container-fluid">
              <a className="logo" href="#">
                <h1>Qupons</h1>
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <i class="fa-solid fa-bars"></i>
              </button>
              <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav" className="menu">
                  <a href="#">INICIO</a>
                  <a href="#caracteristicas">CARACTERISTICAS</a>
                  <a href="#acercade">ACERCA DE</a>
                  <a href="#contacto">CONTACTO</a>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
