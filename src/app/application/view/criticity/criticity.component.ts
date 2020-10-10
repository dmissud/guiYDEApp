import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Application} from '../../model/Application';
import {Observable, Subscription} from 'rxjs';
import {ApplicationService} from '../../service/application.service';

@Component({
  selector: 'app-criticity',
  templateUrl: './criticity.component.html',
  styleUrls: ['./criticity.component.scss']
})
export class CriticityComponent implements OnInit , OnDestroy {
  @Input() criticity;
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
