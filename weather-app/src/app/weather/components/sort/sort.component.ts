import { Component, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.scss'],
})
export class SortComponent {

  @Output() OrderItemEvent = new EventEmitter<string>();


  handleChange(value: string) {
    console.log(value);
    this.OrderItemEvent.emit(value);
  }
}
