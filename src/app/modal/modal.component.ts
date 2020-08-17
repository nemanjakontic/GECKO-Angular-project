import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from 'protractor';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input() race;
  @Output() closeEmitter = new Subject<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  closeModal() {
    this.closeEmitter.next(false);
  }

}
