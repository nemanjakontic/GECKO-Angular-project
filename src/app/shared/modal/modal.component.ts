import { RacesModel } from '../../shared/models/races.model';
import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from 'protractor';
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
