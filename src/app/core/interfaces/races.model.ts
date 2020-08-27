import { Constructor, Driver } from './champions.model';

interface Circuit {
    Location: {
        country: string,
        locality: string
    },
    circuitName: string,
    url: string
}

interface FastestLap {
    AverageSpeed: {
        speed: string,
        units: string
    },
    Time: {
        time: string
    },
    lap: string,
    rank: string
}

interface Results {
    Constructor: Constructor,
    Driver: Driver,
    FastestLap: FastestLap,
    grid: string,
    laps: string,
    number: string,
    points: string,
    position: string
}

export interface RacesModel {
        Circuit: Circuit,
        Results: Results[],
        date: string,
        raceName: string,
        round: string,
        season: string,
        url: string
}