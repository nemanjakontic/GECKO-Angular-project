import { RacesModel } from './races.model';
import { ChampionsModel } from './champions.model';

export interface ResponseModel {
    MRData: {
        StandingsTable: {
          StandingsLists: ChampionsModel[]
        },
        RaceTable: {
          Races: RacesModel[]
        }
      }
}