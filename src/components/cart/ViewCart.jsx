import { Button, Grid, Box, Snackbar, Alert } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import React, { useEffect, useState } from 'react'
import { CartContainer, Detail, Header, List, ImgContainer, Img, Name, Price, QuantityContainer, SubTotal, CartTotalsTitle, CartTotals, CartTotalSubtotal, Left, Right, CheckoutButton } from './viewCart';
import { useNavigate } from 'react-router-dom';
import Form from './Form';
import axios from '../../axios';


export default function ViewCart() {
    const [cart, setCart] = useState([]);
    const [createOrderSuccess, setCreateOrderSuccess] = useState(false);
    const [openIfCartEmpty, setOpenIfCartEmpty] = useState(true);
    const navigate = useNavigate();
    useEffect(() => {
        const cart = JSON.parse(localStorage.getItem('cart'));
        if (cart) {
            setCart([]);
            setOpenIfCartEmpty(false);
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
    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const name = data.get('name');
        const email = data.get('email');
        const phone = data.get('phone');
        const address = data.get('address');
        const body = {
            name,
            email,
            phone,
            address,
            products: cart.map(({ _id: productId, quantity }) => ({ productId, quantity }))
        };
        const response = await axios.post('/order', body);
        if (response.status === 201) {
            setCart([]);
            localStorage.setItem('cart', JSON.stringify([]));
            setCreateOrderSuccess(true);
            setTimeout(() => {
                navigate('/');
            }, 3000);
        }
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
                <Box component="form" onSubmit={handleSubmit}>
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
                                <CheckoutButton type="submit">Checkout</CheckoutButton>
                            </CartTotalSubtotal>
                        </Grid>
                    </Grid>
                </Box>
                <Snackbar open={createOrderSuccess} autoHideDuration={3000}>
                    <Alert severity="success">
                        Your order has been placed! Redirecting to home page in 3 seconds...
                    </Alert>
                </Snackbar>
                <Snackbar open={openIfCartEmpty} autoHideDuration={3000}>
                    <Alert severity="error">
                        Your cart is empty! Please add some items to the cart
                    </Alert>
                </Snackbar>
            </CartTotals>
        </CartContainer>
    )
}
