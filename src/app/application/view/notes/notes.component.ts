import {Component, Input, OnInit} from '@angular/core';
import {Note} from '../../model/Application';
import {ApplicationService} from '../../service/application.service';


@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {

  @Input() notes: Note[];

  $noteDisplay: Note;
  $addNote: boolean;
  displayNote: boolean;
  addNote: boolean;
  note: Note;
  noteDialog: boolean;
  noteDialogDel: boolean;
  submitted: boolean;

  constructor(private applicationService: ApplicationService) {

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
    this.noteDialog = true;
  }

  hideDialog(): void {
    this.noteDialog = false;
    this.submitted = false;
  }

  editNotedelete(note: Note): void {
    this.note = note;
    this.noteDialogDel = true;
  }

  saveNote(): void {
    this.submitted = true;
    console.log('creation en cours' + this.note);
    this.applicationService.createNote(this.note);
    this.noteDialog = false;
    const initDate: Date = new Date(0);
    this.note = new Note('', '', initDate);
  }

  deleteNote(note: Note): void {
    console.log('delete' + this.note + this.note.noteTitle);
    this.submitted = true;
    this.applicationService.deleteNote(this.note);
    this.noteDialog = false;
  }
}
