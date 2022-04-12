import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { UiModule } from '../ui/ui.module';
import { ModalComponent } from './components/modal/modal.component';

@NgModule({
  declarations: [ModalComponent],
  imports: [CommonModule, UiModule, ReactiveFormsModule],
  exports: [ModalComponent],
})
export class WeatherModule {}
