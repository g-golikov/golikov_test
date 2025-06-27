import { BrowserRouter } from 'react-router-dom';
import { ReactNode } from 'react';

interface Props {
    children: ReactNode;
}

export const RouterProvider = ({ children }: Props) => {
    return <BrowserRouter>{children}</BrowserRouter>;
};
