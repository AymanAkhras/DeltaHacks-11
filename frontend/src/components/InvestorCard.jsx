import { Card, CardMedia, CardContent, Typography, Button, CardHeader, } from '@mui/material'
import React from 'react'

function InvestorCard({ name, description, industry, location, funding, image }) {
    return (
        <div style={{ margin: '1rem' }}>
            <Card>
                <CardHeader title={name} />
                <CardMedia
                    component="img"
                    alt="Investor"
                    sx={{ height: 140, width: 140 }}
                    image={image}
                    title="Investor"
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary">{location}</Typography>
                    <Typography variant="body2" color="textSecondary">{industry} - {funding}</Typography>
                    <Typography variant="body2" color="textSecondary">{description}</Typography>

                    <Button variant="contained" color="primary" style={{ marginTop: '1rem' }}>Connect</Button>
                </CardContent>
            </Card>
        </div>
    )
}

export default InvestorCard