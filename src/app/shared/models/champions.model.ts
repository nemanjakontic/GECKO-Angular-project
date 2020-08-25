export interface ChampionsModel {
    DriverStandings: [
        {
            Constructors: [
              {
                  constructorId: string,
                  name: string,
                  nationality: string,
                  url: string
              }
            ],
            Driver: {
              code: string,
              dateOfBirth: string,
              driverId: string,
              familyName: string,
              givenName: string,
              nationality: string,
              permanentNumber: string,
              url: string
            },
            points: string,
            position: string,
            wins: string
        }
    ],
    season: string
}