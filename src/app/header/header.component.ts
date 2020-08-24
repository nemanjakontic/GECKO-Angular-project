import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  navigateTo(section: string) {
    window.location.hash = '';
    window.location.hash = section;
  }

}
