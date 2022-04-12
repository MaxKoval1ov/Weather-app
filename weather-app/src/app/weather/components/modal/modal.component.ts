import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  @Output() close = new EventEmitter<void>();

  ngOnInit(): void {
    // this.addCityForm.controls();
  }

  addCityForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
  });

  onSubmit() {
    this.close.emit();
  }
  // close() {
  //   this.close.emit();
  // }
}
