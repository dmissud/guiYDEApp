import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Application, Note} from '../../model/Application';
import {Observable, Subscription} from 'rxjs';
import {ApplicationService} from '../../service/application.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit , OnDestroy {
  @Input() notes: Note[];
  application: Application;
  application$: Observable<Application>;

  private applicationSubsciption: Subscription;

  constructor(private applicationService: ApplicationService) { }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.application$ = this.applicationService.applicationObservable;

    this.applicationSubsciption = this.applicationService.applicationObservable.subscribe(response => this.application = response);
  }
  ngOnDestroy(): void {
    this.applicationSubsciption.unsubscribe();

  }
}
