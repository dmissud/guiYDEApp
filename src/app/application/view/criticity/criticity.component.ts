import {Component, Input, OnInit} from '@angular/core';


@Component({
  selector: 'app-criticity',
  templateUrl: './criticity.component.html',
  styleUrls: ['./criticity.component.scss']
})
export class CriticityComponent implements OnInit {
  @Input() criticity;

  ngOnInit(): void {
  }

}
