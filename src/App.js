import "./App.css";
import { About } from "./Components/Layout/About";
import { Contactpage } from "./Components/Layout/Contactpage";
import { Container } from "./Components/Layout/Container";
import { Findpage } from "./Components/Layout/Findpage";
import { Footer } from "./Components/Layout/Footer";
import { Gallery } from "./Components/Layout/Gallery";
import { Header } from "./Components/Layout/Header";
import { ProductItem } from "./Components/Layout/ProductItem";
import { Reviews } from "./Components/Layout/Reviews";

function App() {
  return (
    <div className="App">
      <Header />
      <Container />
      <About />
      <Gallery/>
      <ProductItem/>
      <Reviews/>
      <Contactpage/>
      <Findpage/>
      <Footer/>
     
    
    </div>
  );
}

export default App;
