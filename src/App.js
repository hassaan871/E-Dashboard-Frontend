import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Products from "./components/products/Products";
import AddProducts from "./components/addProducts/AddProducts";
import UpdateProducts from "./components/updateProducts/UpdateProducts";
import Profile from "./components/profile/Profile";
import Footer from "./components/footer/Footer";
import Signup from "./components/authentication/signup/Signup";
import Login from "./components/authentication/signup/Login";

const App = () => {
  return (
    <div>
      {/* <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/products" element={<Products />} />
          <Route path="/add-products" element={<AddProducts />} />
          <Route path="/update-products" element={<UpdateProducts/>} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <Footer />
      </BrowserRouter> */}
      {/* <Signup /> */}
      <Login />
    </div>
  );
}

export default App;
