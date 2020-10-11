import {Component, OnInit} from '@angular/core';
import {FluxRefi} from '../../model/flux-refi';

@Component({
  selector: 'app-list-flux-refi',
  templateUrl: './list-flux-refi.component.html',
  styleUrls: ['./list-flux-refi.component.scss']
})
export class ListFluxRefiComponent implements OnInit {
  allFlux: FluxRefi[];
  selectedFlux: FluxRefi;

  constructor() {
    this.allFlux = [
      {
        fluxId: 5,
        originalName: 'creation_light.csv',
        fluxState: 'COMPLETED',
        jobStatus: 'COMPLETED',
        createDate: '2020-10-10T23:17:06.512'
      },
      {
        fluxId: 3,
        originalName: 'creation_light.csv',
        fluxState: 'COMPLETED',
        jobStatus: 'COMPLETED',
        createDate: '2020-10-10T23:13:08.353'
      },
      {
        fluxId: 1,
        originalName: 'creation_light.csv',
        fluxState: 'COMPLETED',
        jobStatus: 'COMPLETED',
        createDate: '2020-10-10T18:24:16.165'
      },
      {
        fluxId: 4,
        originalName: 'creation_light.csv',
        fluxState: 'COMPLETED',
        jobStatus: 'COMPLETED',
        createDate: '2020-10-10T23:13:25.456'
      },
      {
        fluxId: 6,
        originalName: 'creation_light.csv',
        fluxState: 'COMPLETED',
        jobStatus: 'COMPLETED',
        createDate: '2020-10-10T23:17:52.542'
      },
      {
        fluxId: 2,
        originalName: 'creation_light.csv',
        fluxState: 'COMPLETED',
        jobStatus: 'COMPLETED',
        createDate: '2020-10-10T22:35:54.015'
      },
      {
        fluxId: 7,
        originalName: 'creation_light.csv',
        fluxState: 'COMPLETED',
        jobStatus: 'COMPLETED',
        createDate: '2020-10-11T09:15:34.054'
      }
    ];
  }

  ngOnInit(): void {
  }

  selectProduct(flux: any): void {

  }

  onRowSelect($event: any): void {

  }

  onRowUnselect($event: any): void {

  }
}
