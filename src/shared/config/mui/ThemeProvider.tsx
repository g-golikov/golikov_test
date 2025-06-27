import { ThemeProvider as MUIThemeProvider, createTheme, CssBaseline } from '@mui/material';
import {FC, ReactNode} from 'react';
import { theme } from './theme';

interface Props {
    children: ReactNode;
}

export const ThemeProvider: FC<Props> = ({ children }) => (
    <MUIThemeProvider theme={theme}>
        <CssBaseline />
        {children}
    </MUIThemeProvider>
);