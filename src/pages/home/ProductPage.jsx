import React from 'react'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'
import ProductDetails from '../../components/home/productDetails/ProductDetails.jsx'
import { useParams } from 'react-router-dom'
import Comment from '../../components/home/productDetails/Comment.jsx'
export default function ProductPage() {
    const { id } = useParams();
    return (
        <React.Fragment>
            <Navbar />
            <ProductDetails id={id} />
            <Comment id={id} />
            <Footer />
        </React.Fragment>
    )
}
