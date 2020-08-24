import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


export interface ResponseData {
  MRData: {
    StandingsTable: {
      StandingsLists
    },
    RaceTable: {
      Races
    }
  }
}

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient) { }

  getAllChampions() {
    return this.http.get(
        environment.apiUrl + environment.getAllChampions
        ).pipe(map((response: ResponseData) => {
          console.log(response);
          return response.MRData.StandingsTable.StandingsLists;
        }));
  }

  getAllRacesForYear(year: number) {
    return this.http.get(
        environment.apiUrl + year + environment.getAllRacesForYear
        ).pipe(map((response: ResponseData) => {
          return response.MRData.RaceTable.Races;
        }));
  }

}
