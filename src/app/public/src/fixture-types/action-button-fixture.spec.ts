//#region Imports
import {
  Component
} from '@angular/core';

import {
  TestBed
} from '@angular/core/testing';

import {
  SkyActionButtonModule
} from '@blackbaud/skyux/dist/core';

import {
  SkyTestComponentSelector
} from '../component-selector';
//#endregion Imports

//#region Test component
@Component({
  selector: 'action-button-test',
  template: `
<sky-action-button (actionClick)="filterActionClick()" data-sky-id="filter-button">
  <sky-action-button-icon [iconType]="iconType"></sky-action-button-icon>
  <sky-action-button-header>
    Build a new list
  </sky-action-button-header>
  <sky-action-button-details>
    Start from scratch and fine-tune with filters
  </sky-action-button-details>
</sky-action-button>
  `
})
class TestComponent {
  public iconType = 'filter';

  public filterActionClick() { }
}
//#endregion Test component

describe('Action button fixture', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestComponent
      ],
      imports: [
        SkyActionButtonModule
      ]
    });
  });

  it('should expose the expected properties', () => {
    const fixture = TestBed.createComponent(
      TestComponent
    );

    fixture.detectChanges();

    const actionButton = SkyTestComponentSelector.selectActionButton(
      fixture,
      'filter-button'
    );

    expect(actionButton.headerText).toBe('Build a new list');
    expect(actionButton.detialsText).toBe('Start from scratch and fine-tune with filters');
    expect(actionButton.iconType).toBe('filter');
  });

  it('should provide methods for invoking events', () => {
    const fixture = TestBed.createComponent(
      TestComponent
    );

    fixture.detectChanges();

    const actionButton = SkyTestComponentSelector.selectActionButton(
      fixture,
      'filter-button'
    );

    const filterActionClickSpy = spyOn(fixture.componentInstance, 'filterActionClick');

    actionButton.actionClick();

    expect(filterActionClickSpy).toHaveBeenCalled();
  });

});
