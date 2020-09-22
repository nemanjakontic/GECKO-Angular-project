import { ChampionsModel } from '../../core/interfaces/champions.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiServiceService } from 'src/app/core/services/api-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-champions-list',
  templateUrl: './champions-list.component.html',
  styleUrls: ['./champions-list.component.scss']
})
export class ChampionsListComponent implements OnInit, OnDestroy {

  listOfSeasons: ChampionsModel[] = [];
  error: string = null;
  championsSubscription: Subscription;

  constructor(private apiService: ApiServiceService) { }

  ngOnInit(): void {
    this.championsSubscription = this.apiService.getAllChampions()
      .subscribe((seasonsList: ChampionsModel[]) => {
        this.listOfSeasons = seasonsList;
      }, error => {
        this.error = 'Something went wrong. Try Again!';
      });
      // const testSubscription = this.apiService.getAllRacesForYear(2006).subscribe();
      // probati async pipe
    
  }

  ngOnDestroy(): void {
    this.championsSubscription.unsubscribe();
  }

}
