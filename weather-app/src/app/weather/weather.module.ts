import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './components/modal/modal.component';
import { UiModule } from '../ui/ui.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ModalComponent],
  imports: [CommonModule, UiModule, ReactiveFormsModule],
  exports: [ModalComponent],
})
export class WeatherModule {}
