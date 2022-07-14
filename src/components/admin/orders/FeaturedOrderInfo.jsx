import React from 'react'
import { Card, CardHeader, CardContent, Typography } from '@mui/material'
import './featuredOrderInfo.css'
export default function FeaturedOrderInfo() {
    return (
        <div className="featuredOrderInfo">
            <div className="featuredInfo">
                <Card>
                    <CardHeader title="Total Order" />
                    <CardContent>
                        <Typography variant="h5" component="h2">
                            130
                        </Typography>
                    </CardContent>
                </Card>
            </div>
            <div className="featuredInfo">
                <Card>
                    <CardHeader title="Total Income" />
                    <CardContent>
                        <Typography variant="h5" component="h2">
                            $1000
                        </Typography>
                    </CardContent>
                </Card>
            </div>
            <div className="featuredInfo">
                <Card>
                    <CardHeader title="On Delivery" />
                    <CardContent>
                        <Typography variant="h5" component="h2">
                            12
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
