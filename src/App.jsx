import "./App.css";
import { Routes, Route } from "react-router";
import Products from "./component/Product/Products";
import Register from "./Pages/Register";
import AllProducts from "./Pages/AllProducts";
import Cart from "./Pages/Cart";
import { Login } from "@mui/icons-material";
import Layout from "./component/layout/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/products" element={<Products />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/allproducts" element={<AllProducts />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Layout>
  );
}

export default App;
