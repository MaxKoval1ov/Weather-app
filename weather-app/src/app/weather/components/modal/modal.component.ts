import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { map, startWith, Subscription } from 'rxjs';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalComponent implements OnInit, OnDestroy {

  @Output() close = new EventEmitter<void>();

  @Output() addCityEvent = new EventEmitter<string>();

  myControl = new FormControl('', [Validators.required]);

  private subscription = Subscription.EMPTY;

  onInputChange = this.myControl.valueChanges.pipe(
    startWith(''),
    map((value) => (this.avilibleOptions = this._filter(value)))
  );

  options: string[] = [
    'Minsk',
    'Moscow',
    'New York',
    'Brest',
    'Mogilev',
    'Kyiv',
    'Hrodna',
    'Gomel',
  ];

  @Input() alreadyAdded: string[] = [];

  avilibleOptions!: string[];

  ngOnInit() {
    this.options = this.options.filter(
      (val) => !this.alreadyAdded.includes(val)
    );

    this.subscription = this.onInputChange.subscribe();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter((option) =>
      option.toLowerCase().includes(filterValue)
    );
  }

  onSubmit() {
    const name = this.myControl.value;
    if (this.options.includes(name)) {
      this.options = this.options.filter((val) => val != name);
      this.myControl.setValue('');
      this.addCityEvent.emit(name);
    }
  }
}
