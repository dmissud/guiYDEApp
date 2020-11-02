import {Component, Input, OnInit} from '@angular/core';
import {Note} from '../../model/Application';
import {ApplicationService} from '../../service/application.service';
import {AuthService} from '../../../main/service/auth.service';
import {NotificationService} from '../../../main/service/notification.service';
import {ConfirmationService} from 'primeng/api';
import {Observable} from 'rxjs';
import {Auth} from '../../../main/model/Auth';


@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {

  @Input() notes: Note[];

  auth$: Observable<Auth>;
  $noteDisplay: Note;
  selectedNote: Note;
  displayNote: boolean;

  note: Note;
  noteDialog: boolean;
  noteDialogUpdate: boolean;
  submitted: boolean;

  constructor(private applicationService: ApplicationService,
              private authService: AuthService,
              private messageService: NotificationService,
              private confirmationService: ConfirmationService) {
    this.auth$ = this.authService.userLogged;
  }

  ngOnInit(): void {
    console.log(this.notes);
  }

  showNote(note: Note): void {
    console.log(note);
    this.displayNote = true;
    this.$noteDisplay = note;
  }

  openNew(): void {
    this.note = new Note('', '', null);
    this.noteDialog = true;
    this.submitted = true;
  }

  editNote(note: Note): void {
    this.note = note;
    this.$noteDisplay = note;
    this.noteDialog = true;
  }

  hideDialog(): void {
    this.noteDialog = false;
    this.submitted = false;
  }

  editNoteUpdate(note: Note): void {
    this.note = note;
    this.noteDialogUpdate = true;
  }

  saveNote(): void {
    this.submitted = true;
    console.log('creation en cours' + this.note);
    this.applicationService.createNote(this.note);
    this.noteDialog = false;
    this.noteDialogUpdate = false;
    const initDate: Date = new Date(0);
    this.note = new Note('', '', initDate);
  }

  deleteNote(note: Note): void {
    this.note = note;
    this.confirmationService.confirm({
      message: 'Confirmez-vous la suppression de la note ' + this.note.noteTitle + ' ?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
  //      this.submitted = true;
  //      this.noteDialog = false;
        this.applicationService.deleteNote(this.note);
        this.note = null;
        this.messageService.notify('success', 'Successful', 'Note supprimée');
      }
    });

  }
}
