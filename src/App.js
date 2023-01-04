import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Home/Home";
import Cart from "./Home/Pages/Cart";
import Projects from "./Home/Pages/Projects";
import Contact from "./Home/Pages/Contact";
import Product from "./Home/Pages/Product";
import GetKnowUs from "./Home/Pages/GetKnowUs";
import Menu from "./bars/Menu";
import Demo from "./Home/Pages/Demo";
import ProductCategory from "./Home/Pages/ProuctCategory";
import OneProduct from "./Home/Pages/OneProduct";
import AdminPanel from "./Admin/AdminPanel";
import Landingpage from "./Home/Landingpage";
import ApplyFranchise from "./Home/Forms/ApplyFranchis";
import Login from "./Home/Forms/Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Menu />
        <Login/>
        <ApplyFranchise />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Product />} />
          <Route path="/getknowus" element={<GetKnowUs />} />
          <Route path="/landingpage" element={<Landingpage />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="/products/armutsalincak" element={<ProductCategory />} />
          <Route path="/products/armutsalincak/id" element={<OneProduct />} />
          <Route path="/admin/*" element={<AdminPanel />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
