import React from 'react';
import { Container, Box, Card, CardContent, CardMedia, Typography, Button, AppBar, Toolbar, IconButton, } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

function HomePage() {
    return (
        <div>
            <Container>
                <Box container spacing={4} style={{ marginTop: '2rem' }}>
                    <Box item xs={12} md={6}>
                        <Card>
                            <CardMedia
                                component="img"
                                alt="Upload Financial Data"
                                height="140"
                                image="https://via.placeholder.com/150" // Placeholder image link
                                title="Upload Financial Data"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">Upload Financial Data</Typography>
                                <Typography variant="body2" color="textSecondary">Upload your financial documents to get started.</Typography>
                                <Button variant="contained" color="primary" style={{ marginTop: '1rem' }}>Get Started</Button>
                            </CardContent>
                        </Card>
                    </Box>
                    <Box item xs={12} md={6}>
                        <Card>
                            <CardMedia
                                component="img"
                                alt="Match with Lenders/Investors"
                                height="140"
                                image="https://via.placeholder.com/150" // Placeholder image link
                                title="Match with Lenders/Investors"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">Match with Lenders/Investors</Typography>
                                <Typography variant="body2" color="textSecondary">Find the best funding options that match your profile.</Typography>
                                <Button variant="contained" color="primary" style={{ marginTop: '1rem' }} href="/match">Find Matches</Button>
                            </CardContent>
                        </Card>
                    </Box>
                </Box>
            </Container>
        </div>
    );
}

export default HomePage;
