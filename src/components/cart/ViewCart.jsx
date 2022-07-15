import { Button, Grid } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import React from 'react'
import { CartContainer, Detail, Header, List, ImgContainer, Img, Name, Price, QuantityContainer, SubTotal, CartTotalsTitle, CartTotals, CartTotalSubtotal, Left, Right, CheckoutButton } from './viewCart';
import Form from './Form';
export default function ViewCart() {
    const products = [
        {
            url: 'assets/Honey_soap.png',
            name: 'Goat Milk Soap',
            price: '$10.00',
            quantity: 1
        },
        {
            url: 'assets/Creme_candle.png',
            name: 'Creme Candle',
            price: '$10.00',
            quantity: 2
        }
    ]
    const productsWithSubTotal = products.map(product => {
        let subTotal = product.price.replace('$', '') * product.quantity
        subTotal = "$".concat(subTotal)
        return { ...product, subTotal }
    })
    let total = productsWithSubTotal.reduce((acc, curr) => {
        let subTotal = curr.subTotal.replace('$', '')
        return acc + parseFloat(subTotal)
    }, 0)
    total = "$".concat(total)
    console.log(productsWithSubTotal)
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
                {productsWithSubTotal.map(product => {
                    return (
                        <List>
                            <Button variant="outlined" startIcon={<DeleteIcon />} sx={{ position: "absolute", left: 0, top: "35%" }}>Remove</Button>
                            <ImgContainer>
                                <Img src={product.url} />
                            </ImgContainer>
                            <Name>{product.name}</Name>
                            <Price>{product.price}</Price>
                            <QuantityContainer>
                                <div>-</div>
                                <div>{product.quantity}</div>
                                <div>+</div>
                            </QuantityContainer>
                            <SubTotal>{product.subTotal}</SubTotal>
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
                            <Right>{total}</Right>
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
