import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient) { }

  getAllChampions() {
    return this.http.get(
        'http://ergast.com/api/f1/driverStandings/1.json?limit=14&offset=55'
        ).pipe(map(response => {
          return response.MRData.StandingsTable.StandingsLists;
        }));
  }

  getAllRacesForYear(year: number) {
    return this.http.get(
        `http://ergast.com/api/f1/${year}/results/1.json`
        ).pipe(map(response => {
          return response.MRData.RaceTable.Races;
        }));
  }

}
