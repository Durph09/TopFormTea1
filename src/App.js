import {
  BrowserRouter,
  Routes,
  Route,
  useParams,
} from "react-router-dom";
import Footer from "./components/Footer";
import SiteNav from "./components/SiteNav";
import { Shop } from "./Pages/Shop";
import { ShopContextProvider } from "./components/shopContext";
import Home from "./Pages/Home";
import { Cart } from "./components/Cart";
import ProductPage from "./components/ProductPage";
import AboutUs from "./Pages/AboutUs";
import Checkout from "./Pages/Checkout";
import CreatedBy from "./components/CreatedBy";


function App() {
  const { productID } = useParams();

  return (
    <div className="App">
      
        <ShopContextProvider>
          
            <SiteNav />
            
            <Routes>
            
              <Route path='/' element={<Home />} />
              <Route path="/Shop" element={<Shop />} />
              <Route path="/Cart" element={<Cart />} />
              <Route path="/AboutUs" element={<AboutUs />} />
              <Route path="/ProductPage/:id" element={<ProductPage />} />
              <Route path="/Checkout" element={<Checkout />} />
            </Routes>
            <Footer />
            <CreatedBy />
          
        </ShopContextProvider>
      
    </div>
  );
}

export default App;
