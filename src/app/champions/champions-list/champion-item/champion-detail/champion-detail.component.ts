import { RacesModel } from './../../../../shared/models/races.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-champion-detail',
  templateUrl: './champion-detail.component.html',
  styleUrls: ['./champion-detail.component.scss']
})
export class ChampionDetailComponent implements OnInit, OnDestroy {

  year: number;
  racesChampions: RacesModel[] = [];
  driverCode: string;
  isLoading: boolean = false;
  showModal: boolean = false;
  selectedRace: RacesModel;
  racesSubscription: Subscription;

  constructor(private route: ActivatedRoute,
              private apiService: ApiServiceService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.route.params.subscribe((params) => {
      this.year = +params.year;
      this.racesSubscription = this.apiService.getAllRacesForYear(this.year)
        .subscribe((races: RacesModel[]) => {
          this.racesChampions = races;
          this.route.queryParams
            .subscribe(queryParams => {
              this.driverCode = queryParams.code;
              this.isLoading = false;
            });
        });
    });
  }

  showDetails(race: RacesModel): void {
    this.selectedRace = race;
    this.showModal = true;
  }

  close(): void {
    this.showModal = false;
  }

  ngOnDestroy(): void {
    this.racesSubscription.unsubscribe();
  }

}
