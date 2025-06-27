import { BehaviorSubject, interval, map } from 'rxjs';
import { instrumentsMock} from "../../../entities/instrument/model/mockData";
import { Instrument, InstrumentDataPoint } from "../../../entities/instrument/model/types";

// инициализируем с моковыми данными
export const instrumentsStore$ = new BehaviorSubject<Instrument[]>(instrumentsMock);

// генератор случайных цен
function generateRandomPrice(base: number) {
    const delta = (Math.random() - 0.5) * 2; // от -1 до +1
    return +(base + delta).toFixed(2);
}

// запуск генерации данных для каждого инструмента
instrumentsMock.forEach((instrument) => {
    const basePrice = 100 + Math.random() * 50;

    interval(19000).pipe(
        map(() => {
            const point: InstrumentDataPoint = {
                time: new Date().toLocaleTimeString(),
                price: generateRandomPrice(basePrice),
            };
            return point;
        })
    ).subscribe((newPoint) => {
        const current = instrumentsStore$.getValue();
        const updated = current.map(inst => {
            if (inst.id === instrument.id) {
                return {
                    ...inst,
                    data: [...inst.data, newPoint],
                };
            }
            return inst;
        });
        instrumentsStore$.next(updated);
    });
});
