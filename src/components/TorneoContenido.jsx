import BannerUno from "../assets/torneos.jpg"
import BannerDos from "../assets/contenido.jpg"

const TorneoContenido = () => {
    return(
        <div className="container">
            <div className="row my-4">
                <div className="col mx-3">
                    <img className="w-100 rounded" src={BannerUno} alt="torneos" />
                </div>
                <div className="col mx-3">
                    <img className="w-100 rounded" src={BannerDos} alt="contenido" />
                </div>
            </div>
        </div>
    )
}

export default TorneoContenido;