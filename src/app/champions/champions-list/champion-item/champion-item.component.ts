import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-champion-item',
  templateUrl: './champion-item.component.html',
  styleUrls: ['./champion-item.component.scss']
})
export class ChampionItemComponent implements OnInit {

  @Input() season;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  openDetails() {
    this.router.navigate(['seasonChampions', this.season.season], {queryParams: {code: this.season.DriverStandings[0].Driver.code}});
  }

}
