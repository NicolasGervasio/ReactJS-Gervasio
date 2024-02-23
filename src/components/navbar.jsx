import { NavLink } from "react-router-dom"
import Logo from "./Logo"
import CartWidget from "./CartWidget"

const Navbar = () => {
    return (
        <div className="container my-2">
            <div className="row">
                <div className="col-3">
                    <Logo />
                </div>
                <div className="col-md-7 d-flex align-items-center">
                    <ul className="nav">
                        <li className="nav-item">
                            <NavLink className="nav-link text-dark fw-bold h6" activeclassname="active" to={"/"}>Productos</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-dark fw-bold h6" activeclassname="active" to={"/category/monitores"}>Monitores</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-dark fw-bold h6" activeclassname="active" to={"/category/equiposArmados"}>Equipos Armados</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-dark fw-bold h6" activeclassname="active" to={"/category/perifericos"}>Perifericos</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-dark fw-bold h6" activeclassname="active" to={"/category/notebook"}>Notebook</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-dark fw-bold h6" activeclassname="active" to={"/category/consolas"}>Consolas</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="col-2 d-flex justify-content-end">
                    <CartWidget />
                </div>
            </div>
        </div>
    )
}
<h1>hola</h1>

export default Navbar;
