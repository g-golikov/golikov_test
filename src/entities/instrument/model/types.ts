export interface InstrumentDataPoint {
    time: string;
    price: number;
}

export interface Instrument {
    id: string;
    name: string;
    data: InstrumentDataPoint[];
}
