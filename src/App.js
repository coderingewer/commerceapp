import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Cart from "./Home/Cart";
import Contact from "./Home/Contact";
import Home from "./Home/Home";
import Product from "./Home/Product";
import Projects from "./Home/Projects";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/projects/category" element={<Product/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
