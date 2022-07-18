import styled from 'styled-components'
export const ProductPageDetail = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;
	height: 100%;
	margin: 100px 0 100px 0;
`;

export const DetailLeft = styled.div`
	width: 100%;
`;

export const DetailRight = styled.div`
	width: 90%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

export const Title = styled.div`
	font-size: 39px;
	line-height: 49.13px;
	font-weight: 700;
	letter-spacing: 8px;
`;

export const Price = styled.div`
	font-size: 20px;
	line-height: 24px;
	margin-top: 8px;
`;

export const Description = styled.div`
	line-height: 1.5rem;
	color: #707070;
	margin-top: 25px;
	letter-spacing: 1px;
`;

export const Functions = styled.div`
	margin-top: 40px;
	display: flex;
	align-items: center;
`;

export const QuantityContainer = styled.div`
	display: flex;

	& > * {
		height: 40px;
		width: 40px;
		border: 1px solid lightgray;
		font-weight: 500;

		display: flex;
		align-items: center;
		justify-content: center;
	}
`;

export const AddToCartButton = styled.button`
	text-transform: uppercase;
	padding: 13px 40px;
	font-size: 12px;
	background-color: black;
	color: white;
	cursor: pointer;
	letter-spacing: 3px;
	border: 1px solid transparent;
	transition: all 0.3s ease-in-out;
	font-weight: 700;
	width: 195px;

	&:hover {
		background: transparent;
		color: black;
		border-color: black;
	}

	margin-left: 20px;
`;

export const Image = styled.img`
	width: 100%;
	height: auto;
	object-fit: cover;
`;