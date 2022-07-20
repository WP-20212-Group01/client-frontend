import { TableCell, TableRow } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { useState } from "react";
import ListProduct from "./ListProduct";

const Container = styled.div`
	margin-top: 30px;
	padding: 0 5%;

	@media (max-width: 576px) {
		padding: 0 2%;
	}
`;


const categories = [
    {
        id: 1,
        name: 'SOAPS'
    },
    {
        id: 2,
        name: 'CANDLES'
    },
    {
        id: 3,
        name: 'DIFFUSERS'
    },
    {
        id: 4,
        name: 'FRAGRANCES'
    }
]

const ProductsCategory = () => {

    const [chosenItem, setChosenItem] = useState();

    function handlePressItem(index) {
        setChosenItem(index);
    }

    return (
        <Container>
            <TableRow style={{ marginTop: 50 }} >
                <TableCell align="left" sx={{
                    fontSize: '15px',
                    fontWeight: 'bold',
                    letterSpacing: '3px',
                    color: 'black',
                }}>
                    <div style={{ alignItems: 'flex-start' }}>
                        <h2>
                            CATEGORIES
                        </h2>
                        <h3 onMouseOver={() => handlePressItem("all")}
                            onMouseLeave={() => setChosenItem(undefined)}

                            onClick={() => { }}

                            style={{
                                ...(chosenItem === "all" && {
                                    background: "rgba(0,0,0,0.1)",
                                }),
                                borderRadius: "10px",
                                padding: "5px 15px 5px 15px",
                                cursor: "pointer",
                            }}
                        >
                            ALL
                        </h3>
                        {categories.map((category, index) => (
                            <h3 key={category.id}
                                onMouseOver={() => handlePressItem(category.id)}
                                onMouseLeave={() => setChosenItem(undefined)}

                                onClick={() => { }}

                                style={{
                                    ...(chosenItem === category.id && {
                                        background: "rgba(0,0,0,0.1)",
                                    }),
                                    borderRadius: "5px",
                                    padding: "5px 15px 5px 15px",
                                    cursor: "pointer",
                                }}
                            >
                                {category.name}
                            </h3>
                        ))}
                    </div>
                </TableCell>
                <TableCell>
                    <ListProduct />
                </TableCell>
            </TableRow>
        </Container>
    )
}

export default ProductsCategory;