import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-champions-list',
  templateUrl: './champions-list.component.html',
  styleUrls: ['./champions-list.component.scss']
})
export class ChampionsListComponent implements OnInit {

  listOfSeasons = [];
  isLoading = false;

  constructor(private apiService: ApiServiceService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.apiService.getAllChampions()
      .subscribe(seasonsList => {
        console.log(seasonsList);
        this.listOfSeasons = seasonsList;
        this.isLoading = false;
      });
  }

}
