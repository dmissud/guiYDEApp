import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {Application} from '../../model/Application';
import {ApplicationService} from '../../service/application.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.scss']
})
export class ApplicationComponent implements OnInit, OnDestroy {
  application: Application;

  application$: Observable<Application>;

  private applicationSubsciption: Subscription;

  constructor(private applicationService: ApplicationService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.application$ = this.applicationService.applicationObservable;

    this.applicationSubsciption = this.applicationService.applicationObservable.subscribe(response => {
      this.application = response;
      if ((this.application === null)
        || (this.application.codeApplication === null)
        || (!this.application.codeApplication.includes('AP'))) {
        this.router.navigate(['/']);
      }
    });
  }

  ngOnDestroy(): void {
    this.applicationSubsciption.unsubscribe();

  }
}
