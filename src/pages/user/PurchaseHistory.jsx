import React from 'react'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'
import PurchaseHistoryTable from '../../components/user/PurchaseHistoryTable.jsx'

export default function PurchaseHistory() {
    return (
        <React.Fragment>
            <Navbar />
            <PurchaseHistoryTable />
            <Footer />
        </React.Fragment>
    )
}
