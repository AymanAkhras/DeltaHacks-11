import React from 'react';
import { Container, Grid, Card, CardContent, CardMedia, Typography, Button, AppBar, Toolbar, IconButton, } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

function HomePage() {
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6">Funding App</Typography>
                </Toolbar>
            </AppBar>
            <Container>
                <Grid container spacing={4} style={{ marginTop: '2rem' }}>
                    <Grid item xs={12} md={6}>
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
                    </Grid>
                    <Grid item xs={12} md={6}>
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
                                <Button variant="contained" color="primary" style={{ marginTop: '1rem' }}>Find Matches</Button>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}

export default HomePage;
