import Navbar from "./components/Navbar.jsx";
import ItemListContainer from "./components/ItemListContainer.jsx";
import Destacados from "./components/Destacados.jsx";
import OcaImg from "./components/OcaImg.jsx";
import Offers from "./components/Offers.jsx";
import TorneoContenido from "./components/TorneoContenido.jsx";
import Footer from "./components/footer.jsx";
import ItemDetailContainer from "./components/ItemDetailContainer.jsx";
import Error404 from "./components/Error404.jsx"
import { BrowserRouter, Routes, Route } from "react-router-dom"

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path={"/"} element={<ItemListContainer />} />
        <Route path={"/category/:id"} element={<ItemListContainer />} />
        <Route path={"/item/:id"} element={<ItemDetailContainer />} />
        <Route path={"*"} element={<Error404 />} />
      </Routes>
      <Destacados />
      <OcaImg />
      <Offers />
      <TorneoContenido />
      <Footer />
    </BrowserRouter>
  )
}

export default App;
