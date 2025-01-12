import { Card, CardMedia, CardContent, Typography, Button, CardHeader, } from '@mui/material'
import PlaceIcon from '@mui/icons-material/Place';
import WorkIcon from '@mui/icons-material/Work';
import React from 'react'

function InvestorCard({ name, description, industry, location, funding, image, buttonText="Connect", onClick=()=>{} }) {
    return (
        <div style={{ margin: '1rem' }}>
            <Card sx={{ borderRadius: '16px' }}>
                <CardHeader title={name} />
                <CardMedia
                    component="img"
                    alt="Investor"
                    sx={{ height: 140, width: 140 }}
                    image={image}
                    title="Investor"
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary">
                        <PlaceIcon style={{ marginRight: '0.5rem' }} />
                        {location}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                        <WorkIcon style={{ marginRight: '0.5rem' }} />
                        {industry} | {funding}
                    </Typography>
                    <br />
                    <Typography variant="body2" color="textSecondary">{description}</Typography>

                    <Button variant="contained" color="primary" style={{ marginTop: '1rem' }} onClick={onClick}>{buttonText}</Button>
                </CardContent>
            </Card>
        </div>
    )
}

export default InvestorCard