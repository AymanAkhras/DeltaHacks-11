import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        mode: 'light',
        background: {
            default: '#fafafa',
            paper: '#ffffff',
        },
        primary: {
            main: '#293132',  // Custom primary blue color
        },
        secondary: {
            main: '#f9826c',  // Custom secondary color
        },
        text: {
            primary: '#000000',  // Black text for better contrast in light mode
            secondary: '#5f6368',
        },
    },
    typography: {
        fontFamily: 'Roboto, Arial, sans-serif', // Updated font family
    },
    components: {
        MuiTextField: {
            styleOverrides: {
                root: {
                    '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                            borderColor: '#474044',  // Outline color
                        },
                        '&:hover fieldset': {
                            borderColor: '#474044',  // Outline color on hover
                        },
                        '&.Mui-focused fieldset': {
                            borderColor: '#474044',  // Outline color when focused
                        },
                    },
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    // Custom button styles
                    backgroundColor: '#293132',  // Primary color for button background
                    '&:hover': {
                        backgroundColor: '#474044',  // Darker shade on hover
                    },
                    color: '#fff',  // White text color
                    borderColor: '#474044', // Outline color for button
                    '&:hover': {
                        borderColor: '#474044', // Outline color on hover
                    },
                },
                outlined: {
                    borderColor: '#474044',  // Outline color for outlined button
                    '&:hover': {
                        borderColor: '#474044',  // Outline color for outlined button on hover
                    },
                },
            },
        },
    },
});

export default theme;
