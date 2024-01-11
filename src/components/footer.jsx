import Enlaces from "./Enlaces";
import Redes from "./Redes";

const Footer = () => {
  const footerStyle = {
    backgroundColor: "#466FE0",
    color: "white",
    padding: "20px",
    width: "100%",
  }
  return (
    <div style={footerStyle}>
      <div className="row">
        <div className="col-lg-3">
          <Enlaces />
        </div>
        <div className="col-lg-3">
          <h5>IMPUESTOS</h5>
          <p>Todos los precios están expresados en dólares americanos e incluyen impuestos</p>
        </div>
        <div className="col-lg-3">
          <h5>IMAGENES</h5>
          <p>Las imágenes de los productos son meramente ilustrativas, si desea conocer detalles específicos de un producto por favor pongase en contacto con nosotros.</p>
        </div>
        <div className="col-lg-3">
          <Redes />
        </div>
        <div><hr /></div>
        <div>
          <p>Thot eCommerce. ©  2023</p>
        </div>
      </div>
    </div>
  )
}

export default Footer;
