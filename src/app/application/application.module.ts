import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ApplicationComponent} from './view/application/application.component';
import {PrimengModule} from '../share/primeng/primeng.module';
import {CyclelifeComponent} from './view/cyclelife/cyclelife.component';
import {ItsolutionComponent} from './view/itsolution/itsolution.component';
import {CriticityComponent} from './view/criticity/criticity.component';
import {PersonneComponent} from './view/personne/personne.component';
import {NotesComponent} from './view/notes/notes.component';
import {FormsModule} from '@angular/forms';
import {ConfirmDialogModule} from 'primeng/confirmdialog';


@NgModule({
  declarations: [ApplicationComponent, CyclelifeComponent, ItsolutionComponent, CriticityComponent,
    PersonneComponent, NotesComponent],
  exports: [
    ApplicationComponent
  ],
  imports: [
    CommonModule,
    PrimengModule,
    FormsModule,
    ConfirmDialogModule
  ]
})
export class ApplicationModule {
}
