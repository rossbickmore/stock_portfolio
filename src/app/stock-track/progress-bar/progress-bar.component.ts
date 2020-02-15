import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {
  @Input() valueToAchieve: number;
  @Input() currentValue: number;
  constructor() { }

  ngOnInit() {
  }
  
  getBarWidth(): number {
    return Math.round(100 * this.currentValue / this.valueToAchieve)
  }
}
