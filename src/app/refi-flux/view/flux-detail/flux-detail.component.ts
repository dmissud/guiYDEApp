import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FluxRefiDetail} from '../../model/flux-refi-detail';
import {Observable} from 'rxjs';
import {RefiService} from '../../service/refi.service';

@Component({
  selector: 'app-flux-detail',
  templateUrl: './flux-detail.component.html',
  styleUrls: ['./flux-detail.component.scss']
})
export class FluxDetailComponent implements OnInit {
  @Output() dismiss = new EventEmitter<boolean>();

  fluxRefi$: Observable<FluxRefiDetail>;
  fluxLoader$: Observable<boolean>;
  states: any;
  selectedState: any;

  constructor(private fluxRefiService: RefiService) {
    this.fluxRefi$ = fluxRefiService.fluxObservable;
    this.fluxLoader$ = fluxRefiService.isLoading;
  }

  ngOnInit(): void {
  }

  stopShowDetail(): void {
    this.dismiss.emit(false);
  }
}
