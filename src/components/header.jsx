import Logo from "./Logo"
import Navbar from "./Navbar"

const Header = () => {
    return (
        <div className="bg-secondary-subtle ">
            <div className="row p-3 mx-1">
                <div className="col-2 d-flex justify-content-center">
                    <Navbar />
                </div>
                <div className="col-10">
                    <Logo />
                </div>
            </div>
            <hr className="my-1" />
        </div>

    )

}

export default Header;