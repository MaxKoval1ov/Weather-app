import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  
  @Input() isWorking = false;

  @Output() open = new EventEmitter<void>();

  @Output() stop = new EventEmitter<void>();

  @Output() start = new EventEmitter<void>();



  handleStop() {
    console.log('stop');
    this.isWorking = !this.isWorking;
    this.stop.emit();
  }

  handleStart() {
    console.log('start');
    this.isWorking = !this.isWorking;
    this.start.emit();
  }
}
