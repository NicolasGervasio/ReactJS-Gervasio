import Tarjetas from "../assets/metodos_tarjetas.png"
import Instagram from "../assets/instagram.png"
import Facebook from "../assets/facebook.png"
import TikTok from "../assets/tiktok.png"
import YouTube from "../assets/youtube.png"




const Redes = () => {
    return (
        <div>
            <h5>NUESTRAS REDES</h5>
            <div>
                <a className="mx-2" href="#"><img src={Instagram} alt="instagram" /></a>
                <a className="mx-2" href="#"><img src={Facebook} alt="facebook" /></a>
                <a className="mx-2" href="#"><img src={TikTok} alt="tiktok" /></a>
                <a className="mx-2" href="https://www.youtube.com/watch?v=zA52uNzx7Y4"><img src={YouTube} alt="youtube" /></a>
            </div>
            <div>
                <img className="w-100" src={Tarjetas} alt="tarjetas aceptadas" />
            </div>
        </div>
    )
}

export default Redes