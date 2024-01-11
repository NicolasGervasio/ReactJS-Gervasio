import Oferta1 from "../assets/aourus5.jpg";
import Oferta2 from "../assets/notebook2.png";
import Oferta3 from "../assets/gigabyte27.png";
import Oferta4 from "../assets/omni.jpg";
import Oferta5 from "../assets/gigabyte24.png";
import Oferta6 from "../assets/omni2.jpg";

const Offers = () => {
    const StyleCard = {
        borderRadius: '10px',
        border: '3px solid #ee8379',
        padding: '10px',
    }
    const TextP = {
        fontWeight: 'bold',
        color: '#ff6200',
    }
    const TextoSecundario = {
        textDecoration: 'line-through',
    }
    return (
        <div className="container-lg" >
            <h5 className="h4">OFERTAS</h5>
            <div style={StyleCard} className="row my-3">
                <div className="col mx-3">
                    <img src={Oferta1} className="card-img-top" alt="Equipo1"/>
                    <div className="card-body">
                        <h5 className="card-text">Notebook Aorus 5 KE4-72LA314SH Core I7 12700H/16Gb/SSD 1TGb/RTX3060/15,6 IPS 240Hz/W10</h5>
                        <p className="h5" style={TextoSecundario}>US$1,999.99</p>
                        <p className="h4" style={TextP}>US$1,749.99</p>
                    </div>
                </div>
                <div className="col mx-3">
                    <img src={Oferta2} className="card-img-top" alt="Equipo2"/>
                    <div className="card-body">
                        <h5 className="card-text">Notebook Gigabyte G5 MF-G2LA313LH Core I7 12650H/16Gb/SSD PCIe 512Gb/RTX 4050/15,6 144Hz</h5>
                        <p className="h5" style={TextoSecundario}>US$1,625.00</p>
                        <p className="h4" style={TextP}>US$1,449.99</p>
                    </div>
                </div>
                <div className="col mx-3">
                    <img src={Oferta3} className="card-img-top" alt="Equipo3"/>
                    <div className="card-body">
                        <h5 className="card-text">Monitor Gigabyte G27Q 27″ IPS 144hz 2560 x 1440 (QHD)</h5>
                        <p className="h5" style={TextoSecundario}>US$420.00</p>
                        <p className="h4" style={TextP}>US$349.99</p>
                    </div>
                </div>
                <div className="col mx-3">
                    <img src={Oferta4} className="card-img-top" alt="Equipo4"/>
                    <div className="card-body">
                        <h5 className="card-text">Monitor Viewsonic VX2718-2KPC-MHD 27″ Curvo</h5>
                        <p className="h5" style={TextoSecundario}>US$400.00</p>
                        <p className="h4" style={TextP}>US$300.00</p>
                    </div>
                </div>
                <div className="col mx-3">
                    <img src={Oferta5} className="card-img-top" alt="Equipo5"/>
                    <div className="card-body">
                        <h5 className="card-text">Gigabyte G24F 24″ 165hz IPS</h5>
                        <p className="h5" style={TextoSecundario}>US$274.98</p>
                        <p className="h4" style={TextP}>US$265.00</p>
                    </div>
                </div>
                <div className="col mx-3">
                    <img src={Oferta6} className="card-img-top" alt="Equipo6"/>
                    <div className="card-body">
                        <h5 className="card-text">Monitor Viewsonic VX2418-P-MHD 24″ 165Hz</h5>
                        <p className="h5" style={TextoSecundario}>US$249.00</p>
                        <p className="h4" style={TextP}>US$225.00</p>
                    </div>
                </div>
            </div> 
        </div>
    )
}

export default Offers;