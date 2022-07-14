import { Typography } from '@mui/material'
import React from 'react'
import FeaturedOrderInfo from './FeaturedOrderInfo'
import OrderTable from './OrderTable'

export default function OrderHistory() {
    return (
        <div>
            <FeaturedOrderInfo />
            <div className="orderTable">
                <Typography variant="h6" gutterBottom component="div">
                    Order History
                </Typography>
                <OrderTable />
            </div>
        </div>
    )
}
