import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { map, Observable, startWith } from 'rxjs';
import { State } from 'src/app/store';
import { getAllCities } from 'src/app/store/selectors/cities.selector';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  constructor(private store: Store<State>) {}

  @Output() close = new EventEmitter<void>();

  @Output() addCityEvent = new EventEmitter<string>();

  myControl = new FormControl('', [Validators.required]);

  cities$!: Observable<string[]>;

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

    this.cities$ = this.store.pipe(select(getAllCities));
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter((option) =>
      option.toLowerCase().includes(filterValue)
    );
  }

  onSubmit() {
    this.addCityEvent.emit(this.myControl.value);
  }
}
