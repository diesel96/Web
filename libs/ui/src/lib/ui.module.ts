import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import{
  MatButtonModule} from "@angular/material/button";
import {MatStepperModule} from "@angular/material/stepper";
import {MatTooltipModule} from "@angular/material/tooltip";

@NgModule({
  imports: [CommonModule,
    MatButtonModule,
  MatTooltipModule,
  MatAutocompleteModule,
  MatStepperModule,
  FormsModule],
})
export class UiModule {}
