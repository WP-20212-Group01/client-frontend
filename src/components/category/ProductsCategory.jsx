import { TableCell, TableRow, Table, TableBody } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { useState } from "react";
import ListProduct from "./ListProduct";
import axios from '../../axios.js';
const Container = styled.div`
	margin-top: 30px;
	padding: 0 5%;
	@media (max-width: 576px) {
		padding: 0 2%;
	}
`;

const ProductsCategory = () => {
    const [chosenItem, setChosenItem] = useState();
    const [categories, setCategories] = useState([]);
    React.useEffect(() => {
        axios.get('/category')
            .then(res => {
                setCategories(res.data);
            }).catch(err => {
                console.log(err);
            }
            );
    }, []);
    function handlePressItem(index) {
        setChosenItem(index);
    }
    return (
        <Container>
            <Table>
                <TableBody>
                    <TableRow style={{ marginTop: 50 }} >
                        <TableCell align="left" sx={{
                            fontSize: '15px',
                            fontWeight: 'bold',
                            letterSpacing: '3px',
                            color: 'black'
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
                                {categories.map((cat, index) => (
                                    <h3 key={cat._id}
                                        onMouseOver={() => handlePressItem(cat._id)}
                                        onMouseLeave={() => setChosenItem(undefined)}

                                        onClick={() => {

                                        }}

                                        style={{
                                            ...(chosenItem === cat._id && {
                                                background: "rgba(0,0,0,0.1)",
                                            }),
                                            borderRadius: "5px",
                                            padding: "5px 15px 5px 15px",
                                            cursor: "pointer",
                                        }}
                                    >
                                        {cat.name}
                                    </h3>
                                ))}
                            </div>
                        </TableCell>
                        <TableCell>
                            <ListProduct />
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </Container >
    )
}

export default ProductsCategory;