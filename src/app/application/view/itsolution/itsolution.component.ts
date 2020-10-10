import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-itsolution',
  templateUrl: './itsolution.component.html',
  styleUrls: ['./itsolution.component.scss']
})
export class ItsolutionComponent implements OnInit {
  @Input() itSolution;

  constructor() {
  }

  ngOnInit(): void {
  }

}
