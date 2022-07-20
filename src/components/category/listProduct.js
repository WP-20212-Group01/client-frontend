import styled from 'styled-components';
export const Outer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`;
export const Title = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin: 50px 0;
`;

export const TitleSecondaryText = styled.div`
	text-transform: uppercase;
	letter-spacing: 3px;
	font-weight: 600;
	font-size: 12px;
`;

export const TitleText = styled.h2`
	text-align: center;
	letter-spacing: 5px;
	font-size: 32px;
	margin-top: 15px;
	font-weight: 700;
`;

export const Container = styled.div`
	width: 85%;
`;

export const ViewAllButton = styled.a`
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

export const ProductContainer = styled.div`
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

export const Image = styled.img`
	height: 325px;
	object-fit: fill;
`;
export const Price = styled.div`
	line-height: 28.22px;
	text-align: center;
`;

export const Button = styled.button`
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
export const ProductTitle = styled.div`
	text-align: center;
	text-transform: uppercase;
	font-weight: 600;
	letter-spacing: 3px;
	line-height: 21.95px;
	margin-top: 12px;
`;
export const ImageContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	width: 245px;
	& > * {
		width: 100%;
	}
`;