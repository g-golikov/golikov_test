import {ChartPanel} from "../../../widgets/chart-panel/ui/ChartPanel";

export const DashboardPage = () => {

    return (
        <div>
            <h1>Главная страница (Дашборд)</h1>
            <p>Здесь будут графики, виджеты и сводки</p>
            <ChartPanel />
            <ChartPanel />

        </div>
    );
};
