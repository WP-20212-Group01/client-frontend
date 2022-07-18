import { React } from 'react';
import { Routes, Route } from 'react-router-dom';
import Admin from './admin/Admin';
import Login from './login/Login';
import Home from './home/Home';
import Cart from './cart/Cart';
import ProductPage from './home/ProductPage';
export default function App() {
    return (
        <Routes>
            <Route path="admin/*" element={<Admin />} />
            <Route path="login" element={<Login />} />
            <Route path="/" element={<Home />} />
            <Route path="product/:id" element={<ProductPage />} />
            <Route path="cart" element={<Cart />} />
        </Routes>
    );
}
