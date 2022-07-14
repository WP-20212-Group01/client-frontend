import { React } from 'react';
import { Routes, Route } from 'react-router-dom';
import Admin from './admin/Admin';
import Login from './login/Login';
export default function App() {
    return (
        <Routes>
            <Route path="admin/*" element={<Admin />} />
            <Route path="login" element={<Login />} />
        </Routes>
    );
}
