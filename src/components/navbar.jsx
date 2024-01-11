import Logo from "./Logo"
import CartWidget from "./CartWidget"

const Navbar = () => {
    return (
        <div className="bg-secondary-subtle ">
            <div className="row p-3 mx-1">
                <div className="col-1 d-flex justify-content-center">
                    <nav className="navbar">
                        <div className="container-fixed">
                            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="offcanvas offcanvas-start" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                                <div className="offcanvas-header">
                                    <h5 className="offcanvas-title" id="offcanvasNavbarLabel">THOT</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                </div>
                                <div className="offcanvas-body">
                                    <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                        <li className="nav-item">
                                            <a className="nav-link active" aria-current="page" href="#">Cotiza con nosotros</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">Componentes</a>
                                        </li>
                                    </ul>
                                    <form className="d-flex mt-3" role="search">
                                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                        <button className="btn btn-outline-success" type="submit">Search</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
                <div className="col-10">
                    <Logo />
                </div>
                <div className="col-1 d-flex justify-content-end">
                    <CartWidget />
                </div>
            </div>
            <hr className="my-1" />
        </div>

    )
}

export default Navbar;