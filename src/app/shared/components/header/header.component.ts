import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private router: Router){}

  navigateTo(section: string): void {
    this.router.navigate(["/seasonChampions"], {fragment: section});
    // window.location.hash = '';
    // window.location.hash = section;
  }

}
