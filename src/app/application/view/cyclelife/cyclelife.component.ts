import {Component, Input, OnInit} from '@angular/core';


@Component({
  selector: 'app-cyclelife',
  templateUrl: './cyclelife.component.html',
  styleUrls: ['./cyclelife.component.scss']
})
export class CyclelifeComponent implements OnInit {

  @Input() cycleLife;

  ngOnInit(): void {
  }

}
