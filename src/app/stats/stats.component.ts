import { Component } from '@angular/core';
import { CoreService } from '@angular-mf/core';

@Component({
  selector: 'stats-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss'],
})
export class StatsComponent {

  constructor(
    public core: CoreService,
  ) { }

}
