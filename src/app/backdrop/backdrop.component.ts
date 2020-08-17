import { Component, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-backdrop',
  templateUrl: './backdrop.component.html',
  styleUrls: ['./backdrop.component.scss']
})
export class BackdropComponent implements OnInit {

  @Output() closeEmitter = new Subject();

  constructor() { }

  ngOnInit(): void {
  }

  closeModal() {
    this.closeEmitter.next(false);
  }

}
