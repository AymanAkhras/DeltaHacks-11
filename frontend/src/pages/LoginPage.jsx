// src/LoginPage.js
import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box, Link as MUILink } from '@mui/material';
import { Link } from 'react-router-dom';

function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Add your login logic here
        console.log('Login:', { email, password });
    };

    return (
        <Container maxWidth="xs">
            <Typography variant="h4" align="center" gutterBottom>
                Login
            </Typography>
            <TextField
                label="Email"
                variant="outlined"
                fullWidth
                margin="normal"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
                label="Password"
                type="password"
                variant="outlined"
                fullWidth
                margin="normal"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <Button variant="contained" color="primary" fullWidth onClick={handleLogin} style={{ marginTop: '1rem' }}>
                Login
            </Button>
            <Box display="flex" justifyContent="flex-end" style={{ marginTop: '1rem' }}>
                <MUILink component={Link} to="/register" variant="body2">
                    Don't have an account? Register
                </MUILink>
            </Box>
        </Container>
    );
}

export default LoginPage;
