import { Injectable, Component } from '@angular/core';
@Component({
  template:
    `
      <header #HWrapper>
      <h1 #headingElement>member's area</h1>
      </header>
      <mat-card-header>
        <p>
        /səˈsʌɪɪti/
        noun
        noun: society
      </p>
      </mat-card-header>

    `,
})
@Injectable({
  providedIn: 'root'
})
export class AboutService {

  constructor() { }
}
