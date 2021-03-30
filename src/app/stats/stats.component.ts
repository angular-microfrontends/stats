import { Component, OnDestroy, OnInit } from '@angular/core';
import { CoreService } from '@angular-mf/core';

@Component({
  selector: 'stats-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss'],
})
export class StatsComponent implements OnInit, OnDestroy {
  constructor(
    public core: CoreService,
  ) { }

  ngOnInit(): void {
    this.core.load();
  }

  ngOnDestroy(): void {
    this.core.save();
  }
}
