// src/RegisterPage.js
import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box, Link as MUILink } from '@mui/material';
import { Link } from 'react-router-dom';

function RegisterPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleRegister = () => {
        // Add your registration logic here
        console.log('Register:', { name, email, password, confirmPassword });
    };

    return (
        <Container maxWidth="xs">
            <Typography variant="h4" align="center" gutterBottom>
                Register
            </Typography>
            <TextField
                label="Name"
                variant="outlined"
                fullWidth
                margin="normal"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
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
            <TextField
                label="Confirm Password"
                type="password"
                variant="outlined"
                fullWidth
                margin="normal"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <Button variant="contained" color="primary" fullWidth onClick={handleRegister} style={{ marginTop: '1rem' }}>
                Register
            </Button>
            <Box display="flex" justifyContent="flex-end" style={{ marginTop: '1rem' }}>
                <MUILink component={Link} to="/login" variant="body2">
                    Already have an account? Login
                </MUILink>
            </Box>
        </Container>
    );
}

export default RegisterPage;
