import { Routes, Route } from 'react-router-dom';
import { DashboardPage } from "../../pages/dashboard-page/ui/DashboardPage";
import { ProfilePage } from "../../pages/profile-page/ui/ProfilePage";
import {AppLayout} from "../providers/layout/AppLayout";

export const AppRouter = () => {
    return (
        <Routes>
            <Route element={<AppLayout />}>
                <Route path="/" element={<DashboardPage />} />
                <Route path="/profile" element={<ProfilePage />} />
            </Route>
        </Routes>
    );
};
