import Equipo1 from "../assets/equipoAmdRtx.jpg";
import Equipo2 from "../assets/equipoAmdRyzen.jpg";
import Equipo3 from "../assets/equipoIntelGtx.jpg";
import Equipo4 from "../assets/equipoIntelRtx.jpg";
import Equipo5 from "../assets/equipoIntelRtx2.jpg";

const Destacados = () => {
    const StyleCard = {
        borderRadius: '10px',
        border: '3px solid #ee8379',
        padding: '10px',
    }
    const TextP = {
        fontWeight: 'bold',
        color: '#ff6200',
    }
    return (
        <div className="container-lg" >
            <h5 className="h4">DESTACADOS</h5>
            <div style={StyleCard} className="row my-3">
                <div className="col mx-3">
                    <img src={Equipo1} className="card-img-top" alt="Equipo1" />
                    <div className="card-body">
                        <h5 className="card-text">Equipo AMD Ryzen 5 7600 Full Gamer – 16gb DDR5 – SSD – RTX4060</h5>
                        <p className="h4" style={TextP}>US$1,275.00</p>
                    </div>
                </div>
                <div className="col mx-3">
                    <img src={Equipo2} className="card-img-top" alt="Equipo2" />
                    <div className="card-body">
                        <h5 className="card-text">Equipo AMD Ryzen 5 4600G Pro Gamer – 16Gb – SSD – Radeon Graphics</h5>
                        <p className="h4" style={TextP}>US$400.00</p>
                    </div>
                </div>
                <div className="col mx-3">
                    <img src={Equipo3} className="card-img-top" alt="Equipo3" />
                    <div className="card-body">
                        <h5 className="card-text">Equipo Intel Core I5 10400f Pro Gamer 16gb – SSD – GTX1650</h5>
                        <p className="h4" style={TextP}>US$675.00</p>
                    </div>
                </div>
                <div className="col mx-3">
                    <img src={Equipo4} className="card-img-top" alt="Equipo4" />
                    <div className="card-body">
                        <h5 className="card-text">Equipo Intel Core I5 10400f Pro Gamer 16gb – SSD – RTX3050</h5>
                        <p className="h4" style={TextP}>US$825.00</p>
                    </div>
                </div>
                <div className="col mx-3">
                    <img src={Equipo5} className="card-img-top" alt="Equipo5" />
                    <div className="card-body">
                        <h5 className="card-text">Equipo Intel Core I5 10400f Pro Gamer 16gb – SSD – RTX3060 12Gb</h5>
                        <p className="h4" style={TextP}>US$930.00</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Destacados;