import React from 'react'
import { Routes, Route } from 'react-router-dom'
import OrderHistory from '../../components/admin/orders/OrderHistory'
import ProductTable from '../../components/admin/products/ProductTable'
import Topbar from '../../components/admin/Topbar'

export default function Admin() {
    return (
        <div>
            <Topbar />
            <Routes>
                <Route path="products" element={<ProductTable />} />
                <Route path="orders" element={<OrderHistory />} />
            </Routes>
        </div>
    )
}
