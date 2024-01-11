import Banner1 from "../assets/aourus_banner.png";

import Banner2 from "../assets/kingstongFury_banner.jpg";

import Banner3 from "../assets/asusRog_banner.png";

const Carousel = () => {
    return (
        <div className="p-1 my-1 mx-1">
            <div id="carouselExample" className="carousel slide">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={Banner1} className="d-block w-100" alt="" />
                    </div>
                    <div className="carousel-item">
                        <img src={Banner2} className="d-block w-100" alt="" />
                    </div>
                    <div className="carousel-item">
                        <img src={Banner3} className="d-block w-100" alt="" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )

}

export default Carousel;