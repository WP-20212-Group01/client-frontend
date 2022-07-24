import { React } from 'react';

import { Routes, Route, Navigate } from 'react-router-dom';
import Admin from './admin/Admin';
import Login from './login/Login';
import Home from './home/Home';
import Cart from './cart/Cart';
import ProductPage from './home/ProductPage';
import Register from './register/Register';
import PurchaseHistory from './user/PurchaseHistory';
import Category from './category/Category';

export default function App() {
    const adminToken = localStorage.getItem('adminToken');
    return (
        <Routes>
            <Route path="admin/*" element={<Admin />} />
            <Route path="login" element={adminToken ? <Navigate to="/admin" /> : <Login />} />
            <Route path="register" element={<Register />} />
            <Route path="/" element={<Home />} />
            <Route path="product/:id" element={<ProductPage />} />
            <Route path="cart" element={<Cart />} />
            <Route path="user/history" element={<PurchaseHistory />} />
            <Route path="products" element={<Category />} />
        </Routes>
    );
}
