import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-champion-detail',
  templateUrl: './champion-detail.component.html',
  styleUrls: ['./champion-detail.component.scss']
})
export class ChampionDetailComponent implements OnInit {

  year: number;
  racesChampions = [];
  driverCode: string;
  isLoading = false;
  showModal = false;
  selectedRace;

  constructor(private route: ActivatedRoute,
              private apiService: ApiServiceService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.route.params.subscribe((params) => {
      this.year = +params.year;
      this.apiService.getAllRacesForYear(this.year)
        .subscribe(races => {
          this.racesChampions = races;
          this.route.queryParams
            .subscribe(queryParams => {
              this.driverCode = queryParams.code;
              this.isLoading = false;
            });
        });
    });
  }

  showDetails(race) {
    this.selectedRace = race;
    this.showModal = true;
  }

  close() {
    this.showModal = false;
  }

}
