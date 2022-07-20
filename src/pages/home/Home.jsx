import React from "react";
import Slideshow from "../../components/home/slider/Slider";
import Navbar from "../../components/navbar/Navbar";
import Favourite from "../../components/home/favourite/Favourite";
import Aroma from "../../components/home/aroma/Aroma";
import Footer from "../../components/footer/Footer";
import Categories from "../../components/home/category/Category";
const Home = () => {
    return (
        <React.Fragment>
            <Navbar />
            <Slideshow />
            <Favourite />
            <Aroma />
            <Categories />
            <Footer />
        </React.Fragment>
    )
}
export default Home;