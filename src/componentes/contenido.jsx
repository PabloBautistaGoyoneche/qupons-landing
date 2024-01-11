import "./css/contenido.css";
import banner_1 from "../assets/img/banner-1.png";
import banner_2 from "../assets/img/banner-2.png";
import banner_3 from "../assets/img/banner-3.png";

function Contenido() {
  return (
    <>

    <div className="computadoras">
    <section id="caracteristicas">
        <div className="container">
          <h1 className="tituloh1">Caracteristicas del proyecto</h1>
          <div className="container-img-text">
            <div>
              <img src={banner_1} />
            </div>
            <div>
              <h2>Transforma las ofertas en oportunidades irresistibles</h2>
              <p>
                Descubre la revolución en cupones digitales con QUPONS, la
                plataforma que conecta a tiendas destacadas con usuarios ávidos
                de ofertas exclusivas. Proporcionamos a las tiendas un espacio
                exclusivo en línea para destacar sus mejores promociones,
                simplificando la experiencia de compra para los usuarios que
                buscan maximizar su presupuesto. ¡Con QUPONS, cada descuento se
                convierte en una oportunidad que no puedes dejar pasar!
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="container-img-text">
            <div>
              <h2>
                Empoderamos a tiendas y usuarios, QUPONS es el mejor destino de
                descuentos
              </h2>
              <p>
                QUPONS redefine la forma en que las tiendas presentan sus
                ofertas y los usuarios encuentran las mejores promociones.
                Ofrecemos a las tiendas un escaparate digital exclusivo para
                exhibir sus irresistibles descuentos. Para los usuarios, somos
                el destino único donde la búsqueda de ofertas se simplifica,
                permitiéndoles optimizar sus compras. Únete a QUPONS y
                experimenta una nueva era de ahorro y conveniencia.
              </p>
            </div>
            <div>
              <img src={banner_2} />
            </div>
          </div>
        </div>
      </section>
      <section id="caracteristicas">
        <div className="container">
          <div className="container-img-text">
            <div>
              <img src={banner_3} />
            </div>
            <div>
              <h2>La solución integral para tiendas y usuarios exigentes</h2>
              <p>
                QUPONS aborda el desafío común de encontrar ofertas online,
                proporcionando una solución integral para tiendas y usuarios.
                Ofrecemos a las tiendas una plataforma exclusiva para mostrar
                sus mejores promociones, mientras que los usuarios encuentran un
                recurso valioso para optimizar su presupuesto. Con QUPONS, la
                dificultad de buscar ofertas en Internet se transforma en una
                experiencia eficiente y satisfactoria. ¡Únete a la revolución de
                los descuentos digitales con QUPONS!
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>

    <div className="tablets-celulares">
    <section>
        <div className="container">
          <div className="container-img-text">
            <div>
              <img src={banner_1} />
            </div>
            <div>
              <h2>Transforma las ofertas en oportunidades irresistibles</h2>
              <p>
                Descubre la revolución en cupones digitales con QUPONS, la
                plataforma que conecta a tiendas destacadas con usuarios ávidos
                de ofertas exclusivas. Proporcionamos a las tiendas un espacio
                exclusivo en línea para destacar sus mejores promociones,
                simplificando la experiencia de compra para los usuarios que
                buscan maximizar su presupuesto. ¡Con QUPONS, cada descuento se
                convierte en una oportunidad que no puedes dejar pasar!
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="container-img-text">
            <div>
              <img src={banner_2} />
            </div>
            <div>
              <h2>
                Empoderamos a tiendas y usuarios, QUPONS es el mejor destino de
                descuentos
              </h2>
              <p>
                QUPONS redefine la forma en que las tiendas presentan sus
                ofertas y los usuarios encuentran las mejores promociones.
                Ofrecemos a las tiendas un escaparate digital exclusivo para
                exhibir sus irresistibles descuentos. Para los usuarios, somos
                el destino único donde la búsqueda de ofertas se simplifica,
                permitiéndoles optimizar sus compras. Únete a QUPONS y
                experimenta una nueva era de ahorro y conveniencia.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="container-img-text">
            <div>
              <img src={banner_3} />
            </div>
            <div>
              <h2>La solución integral para tiendas y usuarios exigentes</h2>
              <p>
                QUPONS aborda el desafío común de encontrar ofertas online,
                proporcionando una solución integral para tiendas y usuarios.
                Ofrecemos a las tiendas una plataforma exclusiva para mostrar
                sus mejores promociones, mientras que los usuarios encuentran un
                recurso valioso para optimizar su presupuesto. Con QUPONS, la
                dificultad de buscar ofertas en Internet se transforma en una
                experiencia eficiente y satisfactoria. ¡Únete a la revolución de
                los descuentos digitales con QUPONS!
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>

    </>
  );
}

export default Contenido;
