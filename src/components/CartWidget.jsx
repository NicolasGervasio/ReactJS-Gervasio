import { useContext } from "react";
import Carro from "../assets/compra.png";
import { Link } from "react-router-dom";
import { CartContext } from "./context/CartContext";

const CartWidget = () => {
    const { TotalDeProductos } = useContext(CartContext);
    const StyleButton = {
        backgroundColor: '#6495ED',
    }

    return (
        TotalDeProductos() > 0 ? <Link to={"/cart"} className="btn position-relative">
            <img src={Carro} style={StyleButton} alt="Carrito" width={24} />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{TotalDeProductos()}</span>
        </Link> : ""
    )
}

export default CartWidget;