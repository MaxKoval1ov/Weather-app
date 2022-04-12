import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';


const modules: any = [
  MatAutocompleteModule,
  MatCardModule,
  MatButtonModule,
  MatIconModule,
  MatCheckboxModule,
  FormsModule,
  MatButtonModule,
  MatInputModule,
  MatIconModule,
  MatButtonToggleModule,
  MatRadioModule,
  MatSelectModule,
];

@NgModule({
  declarations: [],
  imports: [...modules],
  exports: [...modules],
})
export class UiModule {}
