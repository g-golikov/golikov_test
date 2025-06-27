import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#1976d2',
        },
        secondary: {
            main: '#9c27b0',
        },
        background: {
            default: '#f4f6f8',
            paper: '#fff',
        },
    },
    typography: {
        fontFamily: 'Roboto, sans-serif',
    },
});
