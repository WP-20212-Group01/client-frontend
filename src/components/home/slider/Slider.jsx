import React from "react";
import 'react-slideshow-image/dist/styles.css'
import { Fade } from 'react-slideshow-image';
import styled from "styled-components";

const InfoContainer = styled.div`
	position: absolute;
	flex: 1;
	padding: 50px;
`;

const Title = styled.h1`
	font-size: 120px;
	letter-spacing: 65px;
	font-weight: 600;
	color: white;
`;

const Button = styled.a`
	padding: 13px 50px;
	font-size: 12px;
	background-color: black;
	color: white;
	cursor: pointer;
	letter-spacing: 3px;
	border: 1px solid transparent;
	transition: all 0.3s ease-in-out;
	font-weight: 700;
	width: auto;

	&:hover {
		background: transparent;
		color: black;
		border-color: black;
	}
`;


const fadeImages = [
	{
		url: 'assets/slider1.jpg',
		caption: 'Slide 1',
		title: 'Flame'
	},
	{
		url: 'assets/slider2.jpg',
		caption: 'Slide 2',
		title: "Light"
	},
	{
		url: 'assets/slider3.jpg',
		caption: 'Slide 3',
		title: "Scent"
	},
];
const imageStyles = { Width: 300, Height: 300 };

const Slideshow = () => {
	return (
		<div className="slide-container" style={imageStyles}>
			<Fade autoplay={true} duration={5000} transitionDuration={500}>
				{fadeImages.map((fadeImage, index) => (

					<div className="each-fade" key={index}>
						<div className="image-container">
							<InfoContainer>
								<Title>{fadeImage.title}</Title>
								<Button href="/products?category=all&page=1">SHOP NOW</Button>
							</InfoContainer>
							<img src={fadeImage.url} alt="slideShowImage" />

						</div>

					</div>
				))}
			</Fade>
		</div>
	)
}

export default Slideshow;