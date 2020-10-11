import {Component, OnInit} from '@angular/core';

interface Root {
  name: string;
  idRefog: string;
}

@Component({
  selector: 'app-main',
  templateUrl: './main-tree-applications.component.html',
  styleUrls: ['./main-tree-applications.component.scss']
})
export class MainTreeApplicationsComponent implements OnInit {
  modeOrganization: boolean;
  roots: Root[];
  selectedRoot: Root;

  constructor() {
    this.roots = [
      {name: 'ITG FIT', idRefog: '10000000'},
      {name: 'ITG FRESH', idRefog: '20000000'}
    ];
  }

  ngOnInit(): void {
    this.modeOrganization = true;
  }

  rootChange(): void {
    console.log(this.selectedRoot);
  }
}
