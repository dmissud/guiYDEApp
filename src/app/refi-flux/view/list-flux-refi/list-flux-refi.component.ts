import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FluxRefi} from '../../model/flux-refi';
import {RefiService} from '../../service/refi.service';
import {Observable} from 'rxjs';
import {ConfirmationService} from 'primeng/api';
import {NotificationService} from '../../../main/service/notification.service';

@Component({
  selector: 'app-list-flux-refi',
  templateUrl: './list-flux-refi.component.html',
  styleUrls: ['./list-flux-refi.component.scss']
})
export class ListFluxRefiComponent implements OnInit {
  @Output() newFlux = new EventEmitter<boolean>();
  @Output() showDetail = new EventEmitter<boolean>();
  @Input() askForNewFlux: boolean;

  allFlux$: Observable<FluxRefi[]>;
  selectedFlux: FluxRefi[];

  constructor(private refiService: RefiService,
              private confirmationService: ConfirmationService,
              private messageService: NotificationService) {
    this.allFlux$ = this.refiService.lstFluxObservable;
  }

  ngOnInit(): void {
    this.refiService.loadAllRefiFlux();
  }

  selectFlux(flux: FluxRefi): void {
    this.refiService.loadRefiFlux(flux.fluxId);
    this.showDetail.emit(true);
  }

  onRowSelect($event: any): void {

  }

  onRowUnselect($event: any): void {

  }

  deleteSelectedFlux(): void {

  }

  openNew(): void {
    this.newFlux.emit(true);
  }

  deleteSelectedUsers(): void {
    this.confirmationService.confirm({
      message: 'Confirmez-vous la suppression de ' + this.selectedFlux.length + ' utilisateur(s) ?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.refiService.deleteFluxrefi(this.selectedFlux);
        this.selectedFlux = null;
        this.messageService.notify('success', 'Successful', 'Users Deleted');
      }
    });
  }
}
