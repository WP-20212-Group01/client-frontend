import { TableCell, TableRow, Snackbar, Alert } from '@mui/material';
import React from 'react'
import { useState, useEffect } from 'react';
import { DetailLeft, DetailRight, Image, ProductPageDetail, Title, Price, Description, Functions, QuantityContainer, AddToCartButton } from './productDetails'
import axios from '../../../axios.js';

const cartFromLocalStorage = JSON.parse(localStorage.getItem('cart') || '[]');

export default function ProductDetails(props) {
    const { id } = props;
    const [product, setProduct] = React.useState({});
    const [quantity, setQuantity] = React.useState(1);
    React.useEffect(() => {
        axios.get(`/product/${id}`).then(res => {
            setProduct(res.data);
        }).catch(err => {
            console.log(err);
        }
        );
    }, [id]);

    const [open, setOpen] = React.useState(false);
    const [cart, setCart] = useState(cartFromLocalStorage);

    //add to cart
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const addToCart = (product) => {
        setOpen(true);
        setCart([...cart, product]);
    }
    const handleClose = () => {
        setOpen(false);
    }

    return (
        <>
            <ProductPageDetail>
                <table>
                    <tbody>
                        <TableRow>
                            <TableCell>
                                <DetailLeft >
                                    <Image src={product.image} alt="product" />
                                </DetailLeft>
                            </TableCell>
                            <TableCell>
                                <DetailRight>
                                    <Title>{product.name}</Title>
                                    <Price>${product.price}</Price>
                                    <Description>
                                        Currently in stock: <b style={{ color: "red" }}>{product.stock}</b>
                                    </Description>
                                    <Functions>
                                        <QuantityContainer>
                                            <div
                                                style={{
                                                    cursor: "pointer",
                                                    borderRight: 0,
                                                }}
                                                onClick={() => {
                                                    setQuantity(
                                                        quantity - 1 < 1 ? 1 : quantity - 1
                                                    );
                                                }}
                                            >
                                                -
                                            </div>
                                            <div>{quantity}</div>
                                            <div
                                                style={{ cursor: "pointer", borderLeft: 0 }}
                                                onClick={() => {
                                                    setQuantity(
                                                        quantity + 1 > 10
                                                            ? 10
                                                            : quantity + 1
                                                    );
                                                }}
                                            >
                                                +
                                            </div>
                                        </QuantityContainer>
                                        <AddToCartButton onClick={() => addToCart(product)}>Add to cart</AddToCartButton>
                                    </Functions>
                                </DetailRight>
                            </TableCell>
                        </TableRow>
                    </tbody>
                </table>
                <Snackbar open={open} autoHideDuration={1000} onClose={handleClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}>
                    <Alert severity="success">Add to cart successfully</Alert>
                </Snackbar>
            </ProductPageDetail>
        </>
    )
}
