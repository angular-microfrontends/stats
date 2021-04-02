import { ComponentFixture } from '@angular/core/testing';
import { Fighter } from '@angular-microfrontends/game-core';
import { MockBuilder } from 'ng-mocks';

import { Page } from '../../test/page';
import { TestUtil } from '../../test/test-util';
import { AppModule } from '../app.module';
import { StatsComponent } from './stats.component';

class StatsPage extends Page {
  get upgrade(): HTMLDivElement {
    return this.query('.upgrade');
  }
}

describe('AttackComponent', () => {
  let component: StatsComponent;
  let fixture: ComponentFixture<StatsComponent>;
  let page: StatsPage;

  beforeEach(async () => {
    await MockBuilder(StatsComponent, AppModule);
    ({
      component,
      fixture,
      page,
    } = await TestUtil.initTestEnv(StatsComponent, StatsPage));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display upgrade', () => {
    component.player = new Fighter('Player', 0);
    TestUtil.initComponent(fixture);
    expect(page.upgrade).toBeDefined();
  });
});
