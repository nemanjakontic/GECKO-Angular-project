export interface RacesModel {
        Circuit: {
            Location: {
                country: string,
                locality: string
            },
            circuitName: string,
            url: string
        },
        Results: [
            {
                Constructor: {
                      constructorId: string,
                      name: string,
                      nationality: string,
                      url: string
                },
                Driver: {
                  code: string,
                  dateOfBirth: string,
                  driverId: string,
                  familyName: string,
                  givenName: string,
                  nationality: string,
                  url: string
                },
                FastestLap: {
                  AverageSpeed: {
                      speed: string,
                      units: string
                  },
                  Time: {
                      time: string
                  },
                  lap: string,
                  rank: string
                },
                grid: string,
                laps: string,
                number: string,
                points: string,
                position: string
            }
        ],
      date: string,
      raceName: string,
      round: string,
      season: string,
      url: string
}