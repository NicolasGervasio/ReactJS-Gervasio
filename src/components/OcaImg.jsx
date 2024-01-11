import Oca from "../assets/bannerOca.png"

const OcaImg = () => {
    const StyleImg = {
        borderRadius: '10px'
    }
    return (
        <div className="container-lg my-5">
            <img style={StyleImg} className="w-100" src={Oca} alt="Cuotas" />
        </div>
    )
}

export default OcaImg;