import React from 'react'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'
import ProductDetails from '../../components/home/productDetails/ProductDetails'
import { useParams } from 'react-router-dom'
export default function ProductPage() {
    const { id } = useParams();
    return (
        <React.Fragment>
            <Navbar />
            <ProductDetails id={id} />
            <Footer />
        </React.Fragment>
    )
}
