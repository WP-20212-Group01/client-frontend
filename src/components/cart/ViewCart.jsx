import { Button, Grid } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import React, { useEffect, useState } from 'react'
import { CartContainer, Detail, Header, List, ImgContainer, Img, Name, Price, QuantityContainer, SubTotal, CartTotalsTitle, CartTotals, CartTotalSubtotal, Left, Right, CheckoutButton } from './viewCart';
import Form from './Form';

export default function ViewCart() {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const cart = JSON.parse(localStorage.getItem('cart'));
        if (cart) {
            setCart([]);
            const idOnly = cart.map(item => item._id);
            const unique = [...new Set(idOnly)];
            // Add quantity to each item in cart
            cart.forEach(item => {
                unique.forEach(id => {
                    if (item._id === id) {
                        item.quantity = idOnly.filter(id => id === item._id).length;
                    }
                }
                )
            })
            // Calculate subtotal for each item in cart
            const cartWithSubTotal = cart.map(product => {
                const subTotal = product.price * product.quantity
                return { ...product, subTotal }
            })
            const finalCart = cartWithSubTotal.filter((v, i, a) => a.findIndex(v2 => (v2._id === v._id)) === i) // I honestly don't know why this works
            setCart(finalCart);
        }
    }, []);
    const total = cart.reduce((acc, curr) => {
        const subTotal = curr.subTotal
        return acc + subTotal
    }, 0)
    const handleRemoveItem = (event) => {
        const id = event.currentTarget.id;
        setCart(cart.filter(item => item._id !== id));
        localStorage.setItem('cart', JSON.stringify(cart.filter(item => item._id !== id)));
    }
    return (
        <CartContainer>
            <Detail>
                <Header>
                    <div style={{ textAlign: "right" }}>Product</div>
                    <div> </div>
                    <div>Price</div>
                    <div>Quantity</div>
                    <div>Subtotal</div>
                </Header>
                <hr />
                {cart.map(product => {
                    return (
                        <List key={product._id}>
                            <Button variant="outlined" startIcon={<DeleteIcon />} sx={{ position: "absolute", left: 0, top: "35%" }} onClick={handleRemoveItem} id={product._id}>Remove</Button>
                            <ImgContainer>
                                <Img src={product.image} />
                            </ImgContainer>
                            <Name>{product.name}</Name>
                            <Price>${product.price}</Price>
                            <QuantityContainer>{product.quantity}</QuantityContainer>
                            <SubTotal>${product.subTotal}</SubTotal>
                        </List>
                    )
                })}
            </Detail>
            <CartTotals>
                <CartTotalsTitle>Order detail</CartTotalsTitle>
                <Grid container spacing={3}>
                    <Grid item xs={8}>
                        <Form />
                    </Grid>
                    <Grid item xs={4} sx={{ align: "center" }}>
                        <CartTotalSubtotal>
                            <Left>Total Payment</Left>
                            <Right>${total}</Right>
                        </CartTotalSubtotal>
                        <CartTotalSubtotal>
                            <CheckoutButton>Checkout</CheckoutButton>
                        </CartTotalSubtotal>
                    </Grid>
                </Grid>
            </CartTotals>
        </CartContainer>
    )
}
