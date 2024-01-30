import Carrito from "../assets/compra.png"

const CartWidget = () => {
    return (
        <button type="button" className="btn btn-danger position-relative">
            <img src={Carrito} alt="carrito" />
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">1</span>
        </button>
    )
}

export default CartWidget;