import { TableCell, TableRow } from '@mui/material';
import React from 'react'
import { DetailLeft, DetailRight, Image, ProductPageDetail, Title, Price, Description, Functions, QuantityContainer, AddToCartButton } from './productDetails'
export default function ProductDetails(props) {
    const { id } = props;
    const [product, setProduct] = React.useState({ id, name: 'Product name', price: "$10.00", stock: 10, url: '/assets/Honey_soap.png' });
    const [quantity, setQuantity] = React.useState(1);
    React.useEffect(() => {
        async function getProduct() {

        }
        getProduct();
    }, [id]);
    return (
        <ProductPageDetail>
            <table>
                <tbody>
                    <TableRow>
                        <TableCell>
                            <DetailLeft >
                                <Image src={product.url} alt="product" />
                            </DetailLeft>
                        </TableCell>
                        <TableCell>
                            <DetailRight>
                                <Title>{product.name}</Title>
                                <Price>{product.price}</Price>
                                <Description>
                                    Currently in stock: <b style={{ color: "red" }}>{product.stock}</b>
                                </Description>
                                <Functions>
                                    <QuantityContainer>
                                        <div
                                            style={{
                                                cursor: "pointer",
                                                borderRight: 0,
                                            }}
                                            onClick={() => {
                                                setQuantity(
                                                    quantity - 1 < 1 ? 1 : quantity - 1
                                                );
                                            }}
                                        >
                                            -
                                        </div>
                                        <div>{quantity}</div>
                                        <div
                                            style={{ cursor: "pointer", borderLeft: 0 }}
                                            onClick={() => {
                                                setQuantity(
                                                    quantity + 1 > 10
                                                        ? 10
                                                        : quantity + 1
                                                );
                                            }}
                                        >
                                            +
                                        </div>
                                    </QuantityContainer>
                                    <AddToCartButton>Add to cart</AddToCartButton>
                                </Functions>
                            </DetailRight>
                        </TableCell>
                    </TableRow>
                </tbody>
            </table>
        </ProductPageDetail>
    )
}
