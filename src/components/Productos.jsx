import Monitores from "../assets/monitores.png"
import EquiposArmados from "../assets/equipos_armados.png"
import Notebooks from "../assets/notebooks.png"
import Perifericos from "../assets/perifericos.png"


const Cards = () => {
    return (
        <div className="container text-center">
            <div className="row my-5 mx-3">
                <div className="row">

                </div>
                <div className="col mx-2 shadow-sm p-3 mb-5 bg-body-tertiary rounded">
                    <a href="#"><img src={Monitores} className="card-img-top rounded" alt="monitores" /></a>
                </div>
                <div className="col mx-2 mx-3 shadow-sm p-3 mb-5 bg-body-tertiary rounded">
                    <a href="#"><img src={EquiposArmados} className="card-img-top rounded" alt="equiposArmados" /></a>
                </div>
                <div className="col mx-2 mx-3 shadow-sm p-3 mb-5 bg-body-tertiary rounded">
                    <a href="#"><img src={Notebooks} className="card-img-top rounded" alt="notebooks" /></a>
                </div>
                <div className="col mx-2 mx-3 shadow-sm p-3 mb-5 bg-body-tertiary rounded">
                    <a href="#"><img src={Perifericos} className="card-img-top rounded" alt="perfericos" /></a>
                </div>
            </div>
        </div>
    )
}

export default Cards;
