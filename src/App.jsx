import "./App.css";
import { Routes, Route } from "react-router";
import Products from "./components/Product/Products";
import Register from "./Pages/Register";
import AllProducts from "./Pages/AllProducts";
import Cart from "./Pages/Cart";
import Login from "./Pages/Login";
import Layout from "./components/layout/Layout";
import ShowProduct from "./Pages/ShowProduct";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<AllProducts />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/register" element={<Register />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:productId" element={<ShowProduct />} />
      </Routes>
    </Layout>
  );
}

export default App;
