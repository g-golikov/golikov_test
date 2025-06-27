import { Navbar } from "../../../widgets/navbar/ui/Navbar";
import { Container } from '@mui/material';
import {Outlet} from "react-router-dom";

export const AppLayout = () => {
    return (
        <Container>
            <Navbar />
            <Outlet />

        </Container>
    );
};
