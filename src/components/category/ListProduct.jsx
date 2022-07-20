import { Grid } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Outer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`;
const Title = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin: 50px 0;
`;

const TitleSecondaryText = styled.div`
	text-transform: uppercase;
	letter-spacing: 3px;
	font-weight: 600;
	font-size: 12px;
`;

const TitleText = styled.h2`
	text-align: center;
	letter-spacing: 5px;
	font-size: 32px;
	margin-top: 15px;
	font-weight: 700;
`;

const Container = styled.div`
	width: 85%;
`;

const ViewAllButton = styled.a`
	cursor: pointer;
	width: initial;
	color: black;
	text-decoration: none;
	font-size: 16px;
	font-weight: 700;
	margin-top: 20px;
	letter-spacing: 3px;
	padding: 10px 0;
	border-bottom: 1px solid transparent;
	transition: all 0.45s ease-in;
	color: black;

	&:hover {
		border-color: black;
	}
`;

const ProductContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	& > * > * {
		width: 100%;
	}
	.image-container {
		padding-top: 100%;
		object-fit: cover;
		position: relative;
		height: 0;
		width: 100%;
	}
`;

const Image = styled.img`
	height: 325px;
	object-fit: fill;
`;
const Price = styled.div`
	line-height: 28.22px;
	text-align: center;
`;

const Button = styled.button`
	margin-top: 24px;
	padding: 13px 50px;
	font-size: 12px;
	background-color: black;
	color: white;
	cursor: pointer;
	letter-spacing: 3px;
	border: 1px solid transparent;
	transition: all 0.3s ease-in-out;
	font-weight: 700;

	&:hover {
		background: transparent;
		color: black;
		border-color: black;
	}
`;
const ProductTitle = styled.div`
	text-align: center;
	text-transform: uppercase;
	font-weight: 600;
	letter-spacing: 3px;
	line-height: 21.95px;
	margin-top: 12px;
`;
const ImageContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	width: 245px;
	& > * {
		width: 100%;
	}
`;
const products = [
    {
        id: "1",
        url: 'assets/Honey_soap.png',
        name: 'Goat Milk Soap',
        price: '$10.00',
    },
    {
        id: "2",
        url: 'assets/Creme_candle.png',
        name: 'Creme Candle',
        price: '$10.00',
    },
    {
        id: "3",
        url: 'assets/Coconut.png',
        name: 'Coconut island',
        price: '$10.00',
    },
    {
        id: "4",
        url: 'assets/Choco.png',
        name: 'Chocolate candle',
        price: '$10.00',
    },
    {
        id: "5",
        url: 'assets/Almond.PNG',
        name: 'Almond Candle',
        price: '$10.00',
    },
    {
        id: "6",
        url: 'assets/Candy soap.PNG',
        name: 'Sand Soap',
        price: '$10.00',
    },
    {
        id: "7",
        url: 'assets/Cinamon Apple.PNG',
        name: 'Cinamon Apple',
        price: '$10.00',
    },
    {
        id: "8",
        url: 'assets/Creame Candy.png',
        name: 'Creame Candy',
        price: '$10.00',
    },
    {
        id: "9",
        url: 'assets/Creame.png',
        name: 'Creame',
        price: '$10.00',
    },
    {
        id: "10",
        url: 'assets/Flower wild.PNG',
        name: 'Flower wild',
        price: '$10.00',
    },
    {
        id: "11",
        url: 'assets/Jasmine Candle.PNG',
        name: 'Jasmine Candle',
        price: '$10.00',
    },
    {
        id: "12",
        url: 'assets/Matcha Soap.PNG',
        name: 'Matcha Soap',
        price: '$10.00',
    },
    {
        id: "13",
        url: 'assets/Mint Scent.PNG',
        name: 'Mint Scent',
        price: '$10.00',
    },
    {
        id: "14",
        url: 'assets/organic.PNG',
        name: 'Organic',
        price: '$10.00',
    },
    {
        id: "15",
        url: 'assets/Rain Forest.PNG',
        name: 'Rain Forest',
        price: '$10.00',
    },
    {
        id: "16",
        url: 'assets/Scent oil.PNG',
        name: 'Scent oil',
        price: '$10.00',
    },
    {
        id: "17",
        url: 'assets/Sue.PNG',
        name: 'Sue',
        price: '$10.00',
    },
    {
        id: "18",
        url: 'assets/Triple.PNG',
        name: 'Triple',
        price: '$10.00',
    }
]

const ListProduct = () => {

    return (
        <Outer>
            <Title>
                <TitleSecondaryText>
                    {products.length} products found
                </TitleSecondaryText>
                <TitleText>
                    {products.length > 1 ? "Products" : "Product"}
                </TitleText>
            </Title>
            <Container>
                <Grid container spacing={3}>
                    {products.map((product, index) => (
                        <Grid item xs={12} sm={6} md={4} key={product.id}>
                            <ProductContainer>
                                <ImageContainer>
                                    <Image src={product.url} />
                                </ImageContainer>
                                <ProductTitle>{product.name}</ProductTitle>
                                <Price>{product.price}</Price>
                                <Button>Add to cart</Button>
                            </ProductContainer>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Outer>
    );
}
export default ListProduct;