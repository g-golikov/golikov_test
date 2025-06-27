import {ChartPanel} from "../../../features/chart/ui/ChartPanel";
import {instrumentsMock} from "../../../entities/instrument/model/mockData";
import {Grid} from "@mui/material";

export const DashboardPage = () => {

    return (
        <div>
            <h1>Главная страница (Дашборд)</h1>
            <p>Здесь будут графики, виджеты и сводки</p>
            <Grid container spacing={1}>
                {instrumentsMock.map((instrument) => (
                    <Grid item xs={12} md={6} key={instrument.id}>
                        <ChartPanel instrumentId={instrument.id} />
                    </Grid>
                ))}
            </Grid>

        </div>
    );
};
