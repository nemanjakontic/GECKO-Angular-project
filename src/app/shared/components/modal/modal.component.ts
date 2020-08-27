import { RacesModel } from '../../../core/interfaces/races.model';
import { Component, Input, Output } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {

  @Input() race: RacesModel;
  @Output() closeEmitter = new Subject<boolean>();

  closeModal(): void {
    this.closeEmitter.next(false);
  }

}
