import "./App.css";
import Hero from "./Assets/Pages/Hero";
import NavBar from "./Assets/Pages/NavBar";
import Footer from "./Assets/Pages/Footer";
import Men from './Assets/Pages/Men'
import { Routes, Route } from "react-router-dom";
import MenBanner from './/Assets/Pages/Images/product_24.png'
import WomenBanner from './Assets/Pages/Images/product_10.png'
import KidBanner from './Assets/Pages/Images/product_34.png'
import Women from './Assets/Pages/Women'
import kid from './Assets/Pages/Kids'
import LoginSignUp from "./Assets/Pages/LoginSignUp";
import Product from "./Assets/Pages/Product";
import CartItems from "./Assets/Pages/CartItems";


function App() {
  return (
    <div className="App">
      <NavBar />
      
      <Routes>
        <Route path="/" element={<Hero />}></Route>
        <Route path="/men" element={<Men banner={MenBanner} category={"men"}/>}></Route>
        <Route path="/women" element={<Women banner={WomenBanner} category={"women"}/>}></Route>
        <Route path="/kids" element={<Women banner={KidBanner} category={"kid"}/>}></Route>
        <Route path="/login" element={<LoginSignUp/>}></Route>
        <Route path="/product" element={<Product/>}>
        <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path="/cart" element={<CartItems/>} />
        
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
