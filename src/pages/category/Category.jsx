import React from "react";
import ProductsCategory from "../../components/category/ProductsCategory";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";

const Category = () => {
    return (
        <React.Fragment>
            <Navbar />
            <ProductsCategory />
            <Footer />
        </React.Fragment>
    )
}
export default Category;