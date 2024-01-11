import "./css/contacto.css";

function Contacto() {
  return (
    <>
      <section className="seccion-acercade" id="contacto">
        <div className="container">
          <div>
            <div className="container">
              <h3 className="titulo-participantes">Contacto</h3>
            </div>
          </div>
          <div className="container-acercade-participantes">
            <div className="programador">
              <h3>Marirosa Vilcherrez</h3>
              <p>Base de datos</p>
              <a href="https://www.linkedin.com/in/marirosavilcherrez/">
                <button className="btn-linkeding">
                  <i class="fa-brands fa-linkedin-in"></i>Linkeding
                </button>
              </a>
            </div>
            <div className="programador">
              <h3>Pablo Bautista</h3>
              <p>Frontend</p>
              <a href="https://www.linkedin.com/in/pablobautistagoyoneche/">
                <button className="btn-linkeding">
                  <i class="fa-brands fa-linkedin-in"></i>Linkeding
                </button>
              </a>
            </div>
            <div className="programador">
              <h3>Miguel Bautista</h3>
              <p>Backend</p>
              <a href="https://www.linkedin.com/in/miguelbautistag/">
                <button className="btn-linkeding">
                  <i class="fa-brands fa-linkedin-in"></i>Linkeding
                </button>
              </a>
            </div>
            <div className="programador">
              <h3>Denzel Romero</h3>
              <p>Backend</p>
              <a href="https://www.linkedin.com/in/denzel-rb/">
                <button className="btn-linkeding">
                  <i class="fa-brands fa-linkedin-in"></i>Linkeding
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contacto;
