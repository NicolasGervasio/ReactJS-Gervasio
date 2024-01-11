import Navbar from "./components/Navbar.jsx";
import Carousel from "./components/Carousel.jsx";
import ItemListContainer from "./components/ItemListContainer.jsx";
import Cards from "./components/Productos.jsx";
import Destacados from "./components/Destacados.jsx";
import OcaImg from "./components/OcaImg.jsx";
import Offers from "./components/Offers.jsx";
import TorneoContenido from "./components/TorneoContenido.jsx";
import Footer from "./components/footer.jsx";

const App = () => {
  return (
    <div>
      <Navbar />
      <Carousel />
      <ItemListContainer greeting={"Sitio en mantenimiento. Vuelva mas tarde."}/>
      <Cards />
      <Destacados />
      <OcaImg />
      <Offers />
      <TorneoContenido />
      <Footer />
    </div>
  )
}

export default App;
