import { React } from 'react';
import { Routes, Route } from 'react-router-dom';
import Admin from './admin/Admin';
export default function App() {
    return (
        <Routes>
            <Route path="admin/*" element={<Admin />} />
        </Routes>
    );
}
