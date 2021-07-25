import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatTabsModule} from "@angular/material/tabs";
import {MatToolbarModule} from "@angular/material/toolbar";
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from "@angular/router";
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './nav/login/login.component';

@NgModule({
  declarations: [AppComponent, NavComponent, LoginComponent,],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatButtonModule,
    RouterModule,
    MatToolbarModule,
    MatTabsModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
