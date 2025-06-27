import { Card, CardContent, Typography } from '@mui/material';

export const ChartPanel = () => {
    return (
        <Card sx={{ mb: 2 }}>
            <CardContent>
                <Typography variant="h6">
                    Chart Panel
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Здесь будет ваш график или метрика
                </Typography>
            </CardContent>
        </Card>
    );
};
