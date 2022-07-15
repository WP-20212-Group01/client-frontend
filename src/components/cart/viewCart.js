import styled from 'styled-components';

export const CartContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export const Detail = styled.div`
	width: 85%;
	margin-top: 100px;
`;

export const Header = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;

	& > div {
		font-size: 18px;
		width: 20%;
		padding: 10px 10px;
		text-transform: uppercase;
		font-weight: 700;
		letter-spacing: 3px;
	}
`;

export const List = styled.div`
	width: 100%;
	display: flex;
	position: relative;

	& > div {
		width: 20%;
		padding: 10px 10px;

		display: flex;
		align-items: center;
	}
`;

export const ImgContainer = styled.div`
	display: flex;
	justify-content: flex-end !important;
`;

export const Img = styled.img`
	width: 105px;
	height: 124px;
`;

export const Name = styled.div`
	color: grey;
`;

export const Price = styled.div``;

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

export const SubTotal = styled.div``;

export const CartTotals = styled.div`
	width: 85%;
	margin-top: 100px;
`;

export const CartTotalsTitle = styled.div`
	font-size: 34px;
	line-height: 42px;
	letter-spacing: 8px;
	font-weight: 700;
	text-transform: uppercase;
	margin-bottom: 10px;
`;

export const CartTotalSubtotal = styled.div`
	width: auto;
`;

export const CheckoutButton = styled.button`
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
	margin-bottom: 40px;
`;

export const Left = styled.div`
	text-transform: uppercase;
	font-weight: 700;
	letter-spacing: 3px;
	padding: 20px 0;
	min-width: 35%;

	display: flex;
	align-items: center;
`;

export const Right = styled.div`
	padding: 20px 0;
	width: 40%;
	display: flex;
	flex-direction: column;

	& > div {
		display: flex;
		align-items: center;
		line-height: 28px;
	}
	& > input {
		height: 40px;
		padding: 0px 8px;
		border: 1px solid grey;
	}
	& > select {
		height: 40px;
	}
`;
