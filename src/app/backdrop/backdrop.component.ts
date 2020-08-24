import { Component, Output } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-backdrop',
  templateUrl: './backdrop.component.html',
  styleUrls: ['./backdrop.component.scss']
})
export class BackdropComponent {

  @Output() closeEmitter = new Subject();

  closeModal() {
    this.closeEmitter.next(false);
  }

}
