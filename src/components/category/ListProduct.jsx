import { Grid, Pagination } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Outer, Title, TitleSecondaryText, TitleText, Container, ProductContainer, ImageContainer, Image, ProductTitle, Price, Button } from "./listProduct.js";
import { useSearchParams, Link } from "react-router-dom";
import axios from '../../axios.js';

const cartFromLocalStorage = JSON.parse(localStorage.getItem('cart') || '[]');


const ListProduct = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [totalProductsCount, setTotalProductsCount] = React.useState(0);
    const handlePageChange = (event, page) => {
        event.preventDefault();
        setSearchParams({
            categories: searchParams.get('categories'),
            page: page
        })
    }
    const [products, setProducts] = React.useState([]);
    React.useEffect(() => {
        axios.get('/product', {
            params: {
                page: searchParams.get('page') || 1,
                categories: searchParams.get('categories') || 'all',
            }
        }).then(res => {
            if (res.data == null) {
                return;
            }
            setProducts(res.data.data.slice(0, 12));
            setTotalProductsCount(res.data.pagination.total);
            console.log(res);
        }).catch(err => {
            console.log(err);
        }
        );
    }, [searchParams])

    const [cart, setCart] = useState(cartFromLocalStorage);

    //add to cart
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);






    const addToCart = (product) => {
        console.log("added to cart");
        setCart([...cart, product]);
    }

    return (
        <Outer>
            <Title>
                <TitleSecondaryText>
                    {totalProductsCount} products found
                </TitleSecondaryText>
                <TitleText>
                    {products.length > 1 ? "Products" : "Product"}
                </TitleText>
            </Title>
            <Container>
                <Grid container spacing={3}>
                    {products.map((product, index) => (
                        <Grid item xs={12} sm={6} md={4} key={product._id}>
                            <ProductContainer>
                                <Link to={`/product/${product._id}`} style={{ textDecoration: 'none' }}>
                                    <ImageContainer>
                                        <Image src={product.image} />
                                    </ImageContainer>
                                </Link>
                                <ProductTitle>{product.name}</ProductTitle>
                                <Price>${product.price}</Price>
                                <Button onClick={() => addToCart(product)}>Add to cart</Button>
                            </ProductContainer>
                        </Grid>
                    ))}
                </Grid>
            </Container>
            <Pagination count={Math.ceil(totalProductsCount / 12)} sx={{ mt: 10 }} onChange={handlePageChange} />
        </Outer>
    );
}
export default ListProduct;