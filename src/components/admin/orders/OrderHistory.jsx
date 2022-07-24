import { Typography } from '@mui/material'
import React from 'react'
import OrderTable from './OrderTable'

export default function OrderHistory() {
    return (
        <div>
            <div className="orderTable">
                <Typography variant="h6" gutterBottom component="div">
                    Order History
                </Typography>
                <OrderTable />
            </div>
        </div>
    )
}
