import {
  DebugElement
} from '@angular/core';

import {
  By
} from '@angular/platform-browser';

import {
  SkyTestFixtureUtilities
} from './utilities';

export class SkyAlertFixture {

  public get text(): string {
    return this.debugEl.nativeElement.innerText.trim();
  }

  public get closeable(): boolean {
    const closeBtnEl = this.getCloseBtnEl();

    return SkyTestFixtureUtilities.isVisible(closeBtnEl);
  }

  public get closed(): boolean {
    return !SkyTestFixtureUtilities.isVisible(
      this.getAlertEl()
    );
  }

  public get alertType(): string {
    const nativeEl = this.getAlertEl().nativeElement;

    if (nativeEl.classList.contains('sky-alert-danger')) {
      return 'danger';
    }

    if (nativeEl.classList.contains('sky-alert-info')) {
      return 'info';
    }

    if (nativeEl.classList.contains('sky-alert-success')) {
      return 'success';
    }

    if (nativeEl.classList.contains('sky-alert-warning')) {
      return 'warning';
    }

    return undefined;
  }

  constructor(private debugEl: DebugElement) { }

  public close() {
    if (this.closeable) {
      const closeBtnEl = this.getCloseBtnEl();

      closeBtnEl.triggerEventHandler('click', {});
    } else {
      throw new Error('The alert is not closeable.');
    }
  }

  private getAlertEl(): DebugElement {
    return this.debugEl.query(By.css('.sky-alert'));
  }

  private getCloseBtnEl(): DebugElement {
    return this.debugEl.query(By.css('.sky-alert-close'));
  }

}
