import {Component, Input, OnInit} from '@angular/core';
import {Note} from '../../model/Application';



@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {

  constructor() {

  }

  @Input() notes: Note[];

  $noteDisplay: Note;

  displayNote: boolean;


  // tslint:disable-next-line:typedef
  ngOnInit() {
  }

  // tslint:disable-next-line:typedef
  showNote(note: Note) {
    console.log(note);
    this.displayNote = true;
    this.$noteDisplay = note;


  }
}
