import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { UiModule } from '../ui/ui.module';
import { WeatherCard } from './components/card/card.component';
import { ModalComponent } from './components/modal/modal.component';
import { WeatherComponent } from './components/weather/weather.component';

@NgModule({
  declarations: [ModalComponent, WeatherCard, WeatherComponent],
  imports: [CommonModule, UiModule, ReactiveFormsModule, FontAwesomeModule],
  exports: [ModalComponent, WeatherCard],
})
export class WeatherModule {}
