import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-champion-item',
  templateUrl: './champion-item.component.html',
  styleUrls: ['./champion-item.component.scss']
})
export class ChampionItemComponent {

  @Input() season;

  constructor(private router: Router) { }

  openDetails() {
    this.router.navigate(['seasonChampions', this.season.season], {queryParams: {code: this.season.DriverStandings[0].Driver.code}});
  }

}
