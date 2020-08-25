import { ChampionsModel } from './../../shared/models/champions.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-champions-list',
  templateUrl: './champions-list.component.html',
  styleUrls: ['./champions-list.component.scss']
})
export class ChampionsListComponent implements OnInit, OnDestroy {

  listOfSeasons: ChampionsModel[] = [];
  isLoading: boolean = false;
  error: string = null;
  championsSubscription: Subscription;

  constructor(private apiService: ApiServiceService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.championsSubscription = this.apiService.getAllChampions()
      .subscribe((seasonsList: ChampionsModel[]) => {
        this.listOfSeasons = seasonsList;
        this.isLoading = false;
      }, error => {
        this.isLoading = false;
        this.error = 'Something went wrong. Try Again!';
      });
  }

  ngOnDestroy(): void {
    this.championsSubscription.unsubscribe();
  }

}
