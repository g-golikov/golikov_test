import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

export const Navbar = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    React Dashboard
                </Typography>
                <Button color="inherit" component={Link} to="/">
                    Главная
                </Button>
                <Button color="inherit" component={Link} to="/profile">
                    Профиль
                </Button>
            </Toolbar>
        </AppBar>
    );
};
