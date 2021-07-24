import {findAttributeOnElementWithTag, findElementsWithAttribute} from "@angular/cdk/schematics";
import { Component, OnInit } from '@angular/core';
import {MatButton} from "@angular/material/button";
import {EventManager} from "@angular/platform-browser";

@Component({
  selector: 'dev-danjames-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(matButton: MatButton) {
  }

  ngOnInit(): void {}
}
