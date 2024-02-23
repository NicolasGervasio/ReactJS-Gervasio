import { Link } from "react-router-dom";
import LogoThot from "../assets/logo_thot.svg";

const Logo = () => {

    return (
        <Link to={"/"}>
            < img src={LogoThot} alt="Logo principal" width={200} />
        </Link >
    )
}

export default Logo;