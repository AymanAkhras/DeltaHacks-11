import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        mode: 'light',
        background: {
            default: '#fafafa',
            paper: '#ffffff',
        },
        primary: {
            main: '#58a6ff',  // Custom primary blue color
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
        fontFamily: 'Roboto, Arial, sans-serif',
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    // Custom button styles
                    backgroundColor: '#293132',  // Primary color for button background
                    '&:hover': {
                        backgroundColor: '#474044',  // Darker shade on hover
                    },
                    color: '#fff',  // White text color
                },
            },
        },
    },
});

export default theme;
