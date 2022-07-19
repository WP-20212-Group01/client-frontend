import { React } from 'react';
import { Routes, Route } from 'react-router-dom';
import Admin from './admin/Admin';
import Login from './login/Login';
import Home from './home/Home';
import Cart from './cart/Cart';
import ProductPage from './home/ProductPage';
import Register from './register/Register';
import PurchaseHistory from './user/PurchaseHistory';
export default function App() {
    return (
        <Routes>
            <Route path="admin/*" element={<Admin />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="/" element={<Home />} />
            <Route path="product/:id" element={<ProductPage />} />
            <Route path="cart" element={<Cart />} />
            <Route path="user/history" element={<PurchaseHistory />} />
        </Routes>
    );
}
