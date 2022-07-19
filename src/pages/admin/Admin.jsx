import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import OrderHistory from '../../components/admin/orders/OrderHistory'
import ProductTable from '../../components/admin/products/ProductTable'
import AdminNavbar from '../../components/admin/AdminNavbar'

export default function Admin() {
    return (
        <div>
            <AdminNavbar />
            <Routes>
                <Route path="/" element={<Navigate to="products" />} />
                <Route path="products" element={<ProductTable />} />
                <Route path="orders" element={<OrderHistory />} />
            </Routes>
        </div>
    )
}
