import React from "react";
import styled from "styled-components";

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
	width: 95%;
`;

const Categories = () => {
	return (
		<Outer>
			<Title>
				<TitleText>CATEGORIES</TitleText>
			</Title>
		</Outer>
	);
};

export default Categories;