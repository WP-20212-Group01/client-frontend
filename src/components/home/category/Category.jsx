import React from "react";
import styled from "styled-components";
import { Grid } from "@mui/material";

const Outer = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: center;
	margin-bottom: 40px;
`;

const Title = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin: 50px 0 10px 0;
`;

const TitleText = styled.h2`
	letter-spacing: 5px;
	font-size: 32px;
	margin-top: 15px;
	font-weight: 700;
`;

const Container = styled.div`
	width: 90%;
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

const Image = styled.img`
	height: 325px;
	object-fit: cover;
`;

const Info = styled.div`
	text-transform: uppercase;
	font-size: 22px;
	letter-spacing: 3px;
	font-weight: 700;
	line-height: 24px;
	height: 54px;
	margin-top: 20px;
`;

const Description = styled.div`
	color: lightgrey;
	margin-bottom: 20px;
`;

const Button = styled.a`
	cursor: pointer;
	width: initial;
	color: black;
	text-decoration: none;
	font-size: 12px;
	font-weight: 800;
	letter-spacing: 3px;
	border-bottom: 1px solid transparent;
	transition: all 0.45s ease-in;

	&:hover {
		background: transparent;
		border-bottom: 1px solid black;
	}
`;

const categories = [
	{
		id: "1",
		url: 'assets/cat1.jpg',
		caption: 'Diffusers',
		description: 'Relieving pain and cramping, improving respiratory health, boosting your mood and healing skin conditions'
	},
	{
		id: "2",
		url: 'assets/cat2.jpg',
		caption: 'Soap',
		description: 'Especially in this current climate, is its ability to prevent and remove the growth of bacteria'
	},
	{
		id: "3",
		url: 'assets/cat3.jpg',
		caption: 'Candles',
		description: 'The sense of smell plays an important role in the physiological effects of mood, stress, and working capacity'
	},
	{
		id: "4",
		url: 'assets/cat4.jpg',
		caption: 'Fragrances',
		description: 'Enhancing the mood, lifting your spirits and reflecting your feeling: happy, mischievous, timid or even reserved'
	}
]

const Categories = () => {
	return (
		<Outer>
			<Title>
				<TitleText>CATEGORIES</TitleText>
			</Title>
			<Container>
				<Grid container spacing={7}>
					{categories.map((category, index) => (
						<Grid item xs={12} md={4} lg={3} key={category.id}>
							<ImageContainer>
								<Image src={category.url} />
							</ImageContainer>
							<Info>
								<span>{category.caption}</span>
							</Info>
							<Description>
								{category.description}
							</Description>
							<Button href="#">Explore</Button>
						</Grid>
					))}
				</Grid>
			</Container>
		</Outer>
	);
};

export default Categories;