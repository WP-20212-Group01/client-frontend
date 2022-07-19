import { TableCell, TableContainer, TableHead, TableRow, TableBody, Table } from '@mui/material'
import React from 'react'
import { Container, Inner, Title } from './purchaseHistoryTable.js'


export default function PurchaseHistoryTable() {
    const data = [
        {
            id: 1,
            date: '01/01/2020',
            products: [{ name: 'Product 1', quantity: 1 }, { name: 'Product 2', quantity: 2 }],
            total: '$10.00',
            status: 'Delivered'
        },
        {
            id: 2,
            date: '01/01/2021',
            products: [{ name: 'Product 3', quantity: 1 }, { name: 'Product 4', quantity: 2 }],
            total: '$10.00',
            status: 'Delivered'
        },
        {
            id: 3,
            date: '01/01/2021',
            products: [{ name: 'Product 5', quantity: 1 }, { name: 'Product 6', quantity: 2 }],
            total: '$10.00',
            status: 'Delivered'
        },
        {
            id: 4,
            date: '01/01/2021',
            products: [{ name: 'Product 7', quantity: 1 }, { name: 'Product 8', quantity: 2 }],
            total: '$10.00',
            status: 'Delivered'
        },
        {
            id: 5,
            date: '01/01/2021',
            products: [{ name: 'Product 9', quantity: 1 }, { name: 'Product 10', quantity: 2 }],
            total: '$10.00',
            status: 'Delivered'
        }
    ]
    return (
        <Container>
            <Inner>
                <Title>Purchase History</Title>
                <TableContainer align="center">
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Date</TableCell>
                                <TableCell>Product</TableCell>
                                <TableCell>Quantity</TableCell>
                                <TableCell>Total</TableCell>
                                <TableCell>Status</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.map((row) => {
                                return (
                                    <>
                                        <TableRow key={row.id} >
                                            <TableCell rowSpan={row.products.length}>{row.date}</TableCell>
                                            <TableCell rowSpan={row.products.length}>
                                                {row.products.map(product => {
                                                    return (
                                                        <div key={product.name}>{product.name}</div>
                                                    )
                                                })}
                                            </TableCell>
                                            <TableCell rowSpan={row.products.length}>
                                                {row.products.map(product => {
                                                    return (
                                                        <div key={product.name}>{product.quantity}</div>
                                                    )
                                                })}
                                            </TableCell>
                                            <TableCell rowSpan={row.products.length}>{row.total}</TableCell>
                                            <TableCell rowSpan={row.products.length}>{row.status}</TableCell>
                                        </TableRow>
                                        <TableRow />
                                    </>
                                )
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Inner>
        </Container>
    )
}
