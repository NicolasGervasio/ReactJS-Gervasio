import Navbar from "./components/Navbar.jsx";
import ItemListContainer from "./components/ItemListContainer.jsx";
import Destacados from "./components/Destacados.jsx";
import OcaImg from "./components/OcaImg.jsx";
import Offers from "./components/Offers.jsx";
import TorneoContenido from "./components/TorneoContenido.jsx";
import Footer from "./components/footer.jsx";
import ItemDetailContainer from "./components/ItemDetailContainer.jsx";
import Error404 from "./components/Error404.jsx"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Checkout from "./components/Checkout.jsx";
import Cart from "./components/Cart.jsx";
import CartContextProvider from "./components/context/CartContext.jsx";

const App = () => {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path={"/"} element={<ItemListContainer />} />
          <Route path={"/category/:id"} element={<ItemListContainer />} />
          <Route path={"/item/:id"} element={<ItemDetailContainer />} />
          <Route path={"/cart"} element={<Cart />} />
          <Route path={"/checkout"} element={<Checkout />} />
          <Route path={"*"} element={<Error404 />} />
        </Routes>
        <Destacados />
        <OcaImg />
        <Offers />
        <TorneoContenido />
        <Footer />
      </BrowserRouter>
    </CartContextProvider>
  )
}

export default App;
