import React from 'react'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'
import ViewCart from '../../components/cart/ViewCart.jsx'
export default function Cart() {
    return (
        <React.Fragment>
            <Navbar />
            <ViewCart />
            <Footer />
        </React.Fragment>
    )
}
