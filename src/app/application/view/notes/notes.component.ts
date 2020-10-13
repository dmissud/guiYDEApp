import {Component, Input, OnInit} from '@angular/core';
import {Note} from '../../model/Application';
import {ApplicationService} from '../../service/application.service';


@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {

  constructor(private applicationService: ApplicationService) {

  }

  @Input() notes: Note[];
  $noteDisplay: Note;
  $addNote: boolean;


  displayNote: boolean;
  addNote: boolean;
  note: Note;
  noteDialog: boolean;
  noteDialogDel: boolean;
  submitted: boolean;


  // tslint:disable-next-line:typedef
  ngOnInit() {
  }

  // tslint:disable-next-line:typedef
  showNote(note: Note) {
    console.log(note);
    this.displayNote = true;
    this.$noteDisplay = note;


  }

  // tslint:disable-next-line:typedef
  openNew() {
    this.note = new Note('', '', null);
    this.noteDialog = true;
    this.submitted = true;

  }

  // tslint:disable-next-line:typedef
  editNote(note: Note) {
    this.note = note;
    this.noteDialog = true;
  }

  // tslint:disable-next-line:typedef
  hideDialog() {
    this.noteDialog = false;
    this.submitted = false;
  }

  editNotedelete(note: Note) {
    this.note = note;
    this.noteDialogDel = true;
  }
  // tslint:disable-next-line:typedef
  saveNote() {
    this.submitted = true;
    console.log('creation en cours' + this.note);
    this.applicationService.createNote(this.note);
    this.noteDialog = false;
    const initDate: Date = new Date(0);
    this.note = new Note('', '', initDate);

  }

  // tslint:disable-next-line:typedef
  deleteNote(note: Note) {
    console.log( 'delete' + this.note + this.note.noteTitle);
    this.submitted = true;
    this.applicationService.deleteNote(this.note);
    this.noteDialog = false;
  }

}
