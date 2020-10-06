import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main-organization.component.html',
  styleUrls: ['./main-organization.component.scss']
})
export class MainOrganizationComponent implements OnInit {
  modeOrganization: boolean;

  constructor() {
  }

  ngOnInit(): void {
    this.modeOrganization = true;
  }

}
