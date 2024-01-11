import "./css/footer.css";

function Footer() {
  return (
    <>
      <footer>
          <div className="container">
            <div className="logo-footer">
              <h1>Qupons</h1>
              <a href="https://github.com/MiguelBG12/Proyecto-Qupons" target="_blank" >
              <button><i class="fa-brands fa-github"></i>Visita Github</button>
              </a>
            </div>
            <hr />
            <p>© Copyright 2024 Qupons</p>
          </div>
      </footer>
    </>
  );
}

export default Footer;
