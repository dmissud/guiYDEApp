import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Application} from '../../model/Application';
import {Observable, Subscription} from 'rxjs';
import {ApplicationService} from '../../service/application.service';

@Component({
  selector: 'app-itsolution',
  templateUrl: './itsolution.component.html',
  styleUrls: ['./itsolution.component.scss']
})
export class ItsolutionComponent implements OnInit, OnDestroy {
  @Input() itSolution;
  application: Application;
  application$: Observable<Application>;

  private applicationSubsciption: Subscription;

  constructor(private applicationService: ApplicationService) {
  }

  ngOnInit(): void {
    this.application$ = this.applicationService.applicationObservable;

    this.applicationSubsciption = this.applicationService.applicationObservable.subscribe(response => this.application = response);
  }

  ngOnDestroy(): void {
    this.applicationSubsciption.unsubscribe();

  }
}
