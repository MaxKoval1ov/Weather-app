import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { UiModule } from '../ui/ui.module';
import { WeatherCard } from './components/card/card.component';
import { ModalComponent } from './components/modal/modal.component';
import { SortComponent } from './components/sort/sort.component';

@NgModule({
  declarations: [ModalComponent, SortComponent, WeatherCard],
  imports: [CommonModule, UiModule, ReactiveFormsModule],
  exports: [ModalComponent, SortComponent, WeatherCard],
})
export class WeatherModule {}
