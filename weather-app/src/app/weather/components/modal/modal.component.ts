import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  @Output() close = new EventEmitter<void>();

  myControl = new FormControl();

  options: string[] = [
    'Minsk',
    'Moscow',
    'New York',
    'Brest',
    'Mogilev',
    'Kiev',
    'Grodno',
    'Gomel',
  ];

  @Input() alreadyAdded: string[] = [];

  filteredOptions!: Observable<string[]>;

  ngOnInit() {
    this.options = this.options.filter(
      (val) => !this.alreadyAdded.includes(val)
    );

    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value))
    );

    console.log(this.alreadyAdded);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter((option) =>
      option.toLowerCase().includes(filterValue)
    );
  }

  addCityForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
  });

  onSubmit() {
    console.log(this.addCityForm.value.name);
  }

  // close() {
  //   this.close.emit();
  // }
}
