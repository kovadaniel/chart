export interface StatisticData {
    title: string;
    dev: Metric;
    test: Metric;
    prod: Metric;
    norm: number;
}

export interface Metric {
    front: number;
    back: number;
    db: number;
}