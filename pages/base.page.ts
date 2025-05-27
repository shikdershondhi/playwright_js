import { Page, Locator } from '@playwright/test';
// This class serves as a base class for all page objects in the application.
// It provides common functionality that can be shared across different page classes.

export class BasePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async waitForLoadState(state: 'load' | 'domcontentloaded' | 'networkidle' = 'networkidle') {
    await this.page.waitForLoadState(state);
  }
}