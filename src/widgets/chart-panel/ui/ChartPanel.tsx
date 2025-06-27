import {Card, CardContent, ListItem, List, Typography} from '@mui/material';
import {useObservable} from "../../../shared/lib/rxjs/useObservable";
import {metricsStore} from "../model/store";

export const ChartPanel = () => {
    const metrics = useObservable(metricsStore.subject$, []);

    return (
        <Card sx={{ mb: 2 }}>
            <CardContent>
                <Typography variant="h6">
                    Chart Panel
                </Typography>
                <List>
                    {metrics.slice(-5).map((metric, idx) => (
                        <ListItem key={idx}>
                            {new Date(metric.timestamp).toLocaleTimeString()} — {metric.value}
                        </ListItem>
                    ))}
                </List>
            </CardContent>
        </Card>
    );
};
