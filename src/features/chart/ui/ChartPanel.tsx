import { Line } from 'react-chartjs-2';
import { Card, CardContent, Typography } from '@mui/material';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { useObservable} from "../../../shared/lib/rxjs/useObservable";
import { instrumentsStore$ } from '../model/store';
import { Instrument} from "../../../entities/instrument/model/types";
import { useMemo } from 'react';

// регистрируем Chart.js модули один раз
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

interface Props {
    instrumentId: string;
}

export const ChartPanel = ({ instrumentId }: Props) => {
    const instruments = useObservable(instrumentsStore$, []);

    const instrument = useMemo<Instrument | undefined>(
        () => instruments.find((inst) => inst.id === instrumentId),
        [instruments, instrumentId]
    );

    if (!instrument) {
        return <Typography>Instrument not found</Typography>;
    }

    const labels = instrument.data.map(point => point.time);
    const dataPoints = instrument.data.map(point => point.price);

    const data = {
        labels,
        datasets: [
            {
                label: instrument.name,
                data: dataPoints,
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
            },
        ],
    };

    return (
        <Card>
            <CardContent>
                <Typography variant="h6" gutterBottom>
                    {instrument.name}
                </Typography>
                <Line data={data} />
            </CardContent>
        </Card>
    );
};
