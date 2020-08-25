import { ResponseModel } from './../shared/models/response-model';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient) { }

  getAllChampions() {
    return this.http.get<ResponseModel>(
        environment.apiUrl + environment.getAllChampions
        ).pipe(map((response: ResponseModel) => {
          console.log(response);
          return response.MRData.StandingsTable.StandingsLists;
        }));
  }

  getAllRacesForYear(year: number) {
    return this.http.get<ResponseModel>(
        environment.apiUrl + year + environment.getAllRacesForYear
        ).pipe(map((response: ResponseModel) => {
          console.log(response);
          return response.MRData.RaceTable.Races;
        }));
  }

}
