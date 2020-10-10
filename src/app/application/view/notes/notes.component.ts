import {Component, Input, OnInit} from '@angular/core';
import { Note} from '../../model/Application';


@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  @Input() notes: Note[];

  // tslint:disable-next-line:typedef
  ngOnInit() {
  }
}
