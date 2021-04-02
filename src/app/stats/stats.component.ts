import { Component, OnDestroy, OnInit } from '@angular/core';
import { GameCoreService, Fighter } from '@angular-microfrontends/game-core';

@Component({
  selector: 'stats-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.sass'],
})
export class StatsComponent implements OnInit, OnDestroy {
  player!: Fighter;

  get agiDisabled(): boolean {
    return this.player.agility.cost > this.player.unusedExperience;
  }

  get conDisabled(): boolean {
    return this.player.constitution.cost > this.player.unusedExperience;
  }

  get dexDisabled(): boolean {
    return this.player.dexterity.cost > this.player.unusedExperience;
  }

  get strDisabled(): boolean {
    return this.player.strength.cost > this.player.unusedExperience;
  }

  constructor(
    public core: GameCoreService,
  ) {
    this.player = core.player;
  }

  ngOnInit(): void {
    this.core.load();
  }

  ngOnDestroy(): void {
    this.core.save();
  }
}
