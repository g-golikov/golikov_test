import { interval, map } from 'rxjs';
import { createSubjectStore } from "../../../shared/lib/rxjs/createSubjectStore";

export interface Metric {
    timestamp: number;
    value: number;
}

// Начальное состояние
const initialState: Metric[] = [];

// Хранилище на BehaviorSubject
export const metricsStore = createSubjectStore<Metric[]>(initialState);

// Симуляция приходящих данных (например с WebSocket)
interval(1000)
    .pipe(
        map(() => ({
            timestamp: Date.now(),
            value: Math.floor(Math.random() * 100)
        }))
    )
    .subscribe(newMetric => {
        const current = metricsStore.get();
        metricsStore.set([...current, newMetric]);
    });
